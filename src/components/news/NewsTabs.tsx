import Link from "next/link";

export function NewsTabs({ active }: { active: "announcements" | "blog" }) {
  const tabs = [
    { key: "announcements", label: "Announcements", href: "/announcements" },
    { key: "blog", label: "Blog", href: "/blog" },
  ] as const;
  return (
    <div role="tablist" aria-label="News sections" className="inline-flex border border-line rounded-full overflow-hidden mt-6">
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          role="tab"
          aria-current={active === t.key ? "page" : undefined}
          className={`px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] ${active === t.key ? "bg-text text-bg" : "text-muted hover:text-text"}`}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
