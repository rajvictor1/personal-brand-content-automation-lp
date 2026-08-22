import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-primary/30 bg-primary/10 p-4 text-foreground">
      {children}
    </div>
  );
}

export function ResourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-medium text-primary hover:underline">
      {children}
      <ArrowRight className="ml-1 inline h-4 w-4" />
    </Link>
  );
}

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border/50 bg-card/40">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  );
}

export function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="border-b border-border/50 bg-muted/30">{children}</thead>;
}

export function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr className="border-b border-border/30 last:border-b-0">{children}</tr>;
}

export function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>;
}

export function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 align-top text-muted-foreground">{children}</td>;
}

export const components = {
  Callout,
  ResourceLink,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};
