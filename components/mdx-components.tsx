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

export function Table({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border/50 bg-card/40">
      <table className="w-full border-collapse text-sm" {...props}>{children}</table>
    </div>
  );
}

export function Thead({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="border-b border-border/50 bg-muted/30" {...props}>{children}</thead>;
}

export function Tbody({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props}>{children}</tbody>;
}

export function Tr({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className="border-b border-border/30 last:border-b-0" {...props}>{children}</tr>;
}

export function Th({ children, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return <th className="px-4 py-3 text-left font-semibold text-foreground" {...props}>{children}</th>;
}

export function Td({ children, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) {
  return <td className="px-4 py-3 align-top text-muted-foreground" {...props}>{children}</td>;
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
