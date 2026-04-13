import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Metric {
  label: string
  value: string
}

export function CaseStudyHeader({
  tag,
  title,
  subtitle,
  metrics,
}: {
  tag: string
  title: string
  subtitle: string
  metrics: Metric[]
}) {
  return (
    <div className="pt-28 pb-12 px-6 max-w-5xl mx-auto">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        Back to home
      </Link>

      {/* Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-sm font-medium tracking-wide uppercase">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-3 max-w-3xl">
        {title}
      </h1>
      <p className="text-muted-foreground text-lg mb-10">{subtitle}</p>

      {/* Metrics strip */}
      <div className="bg-card border border-border rounded-xl p-6 flex flex-wrap gap-x-10 gap-y-4">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="font-serif text-2xl font-bold text-primary">
              {m.value}
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CaseStudyBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-24 px-6 max-w-5xl mx-auto">
      <article className="max-w-2xl space-y-14 pt-4">{children}</article>
    </div>
  )
}

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export function SubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6">
      <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-l-2 border-primary/40 pl-5 py-1 my-6 text-muted-foreground text-sm leading-relaxed italic">
      {children}
    </aside>
  )
}

export function MetricsTable({
  rows,
}: {
  rows: { label: string; before: string; after: string }[]
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="py-2 pr-4 text-foreground font-semibold">Metric</th>
            <th className="py-2 px-4 text-muted-foreground font-medium">Before</th>
            <th className="py-2 pl-4 text-muted-foreground font-medium">After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border/50">
              <td className="py-2.5 pr-4 text-foreground font-medium">{row.label}</td>
              <td className="py-2.5 px-4 text-muted-foreground">{row.before}</td>
              <td className="py-2.5 pl-4 text-primary font-semibold">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
