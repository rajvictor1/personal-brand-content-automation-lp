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

export const components = {
  Callout,
  ResourceLink,
};
