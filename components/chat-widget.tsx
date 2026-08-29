"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

type Message = {
  id: string;
  sender: "assistant" | "user";
  text: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  sender: "assistant",
  text: "Hi! I’m the BrandOps assistant. Ask me about features, pricing, or early access.",
};

function createId() {
  return crypto.randomUUID();
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = window.sessionStorage.getItem("brandops-chat-session");
    const nextSessionId = existing || `web-${createId()}`;
    window.sessionStorage.setItem("brandops-chat-session", nextSessionId);
    setSessionId(nextSessionId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();

    if (!message || !sessionId || isSending) return;

    setInput("");
    setIsSending(true);
    setMessages((current) => [
      ...current,
      { id: createId(), sender: "user", text: message },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          sessionId,
          pageUrl: window.location.href,
          history: messages.slice(-12).map(({ sender, text }) => ({ sender, text })),
        }),
      });
      const data = (await response.json()) as {
        reply?: string;
        error?: string;
        lead?: { complete: boolean; name: string | null; email: string | null };
      };

      if (!response.ok || !data.reply) {
        throw new Error(data.error || "Unable to get a response.");
      }

      let reply = data.reply;
      if (data.lead?.complete && data.lead.name && data.lead.email) {
        const leadResponse = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.lead.name,
            email: data.lead.email,
            source: window.location.href,
            sessionId,
            notes: message,
          }),
        });
        reply = leadResponse.ok
          ? `${data.reply}\n\nYou’re on the early-access list. The BrandOps team will follow up by email.`
          : `${data.reply}\n\nI couldn’t save your signup just now. Please email rkrajeshk2018@gmail.com.`;
      }

      setMessages((current) => [
        ...current,
        { id: createId(), sender: "assistant", text: reply! },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: createId(),
          sender: "assistant",
          text: "I’m temporarily unavailable. Please use the contact page and the BrandOps team will help you.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          aria-label="BrandOps customer support chat"
          className="mb-3 flex h-[min(560px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/40 sm:w-[380px]"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-white">BrandOps Assistant</h2>
                <p className="text-xs text-emerald-400">AI support · replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-950 p-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-slate-800 text-slate-100"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <span className="rounded-2xl rounded-bl-md bg-slate-800 px-4 py-3 text-slate-300">
                  <Loader2 className="h-4 w-4 animate-spin" aria-label="BrandOps is replying" />
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-white/10 bg-slate-900 p-3">
            <label htmlFor="brandops-chat-input" className="sr-only">
              Message BrandOps
            </label>
            <input
              id="brandops-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={2000}
              placeholder="Ask about BrandOps…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={!input.trim() || !sessionId || isSending}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="ml-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={isOpen ? "Close BrandOps chat" : "Open BrandOps chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
