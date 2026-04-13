import type { Metadata } from 'next'
import { Mail, ExternalLink, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — R. Cody Bradshaw',
  description: 'My story, what drives me, and what I\'m looking for next.',
}

export default function About() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-sm font-medium tracking-wide uppercase">
          About
        </span>
      </div>
      <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-12 max-w-2xl">
        The short version of a long story.
      </h1>

      {/* Story */}
      <section className="max-w-2xl space-y-6 text-muted-foreground leading-relaxed mb-20">
        <p>
          [Your origin story — where you started, the IT degree, the early roles at HospitalPortal and CDW that gave you the foundation. Keep it brief.]
        </p>
        <p>
          [The defining chapter — joining Thoughtful AI early, building support from nothing, scope expanding because you kept solving the next problem. The jump from 6 to 75+. The acquisition. Getting promoted into Product Ops.]
        </p>
        <p>
          [What you&apos;ve learned about yourself — what kind of work energizes you. Thriving in ambiguity. Being a builder. At your best as the connective tissue between leadership, product, and engineering.]
        </p>
        <p>
          [What&apos;s next — looking for your next operational leadership role at a company where you can build something meaningful. Chief of Staff, Head of Operations, or senior program leader at a growth-stage company.]
        </p>
      </section>

      {/* Personal Touch */}
      <section className="mb-20">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Beyond work
        </h2>
        <div className="bg-card border border-border rounded-xl p-7 max-w-2xl">
          <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Interest in indie game development — the builder mentality extends beyond ops
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Teaching myself to code with AI tools — learning by shipping real projects
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              [Add another personal interest here]
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Get in touch
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="mailto:bradshawrc93@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
            bradshawrc93@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/bradshawrc93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4 text-primary" strokeWidth={1.5} />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            <FileDown className="w-4 h-4 text-primary" strokeWidth={1.5} />
            Download Resume
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          I&apos;m always happy to chat — reach out anytime.
        </p>
      </section>
    </div>
  )
}
