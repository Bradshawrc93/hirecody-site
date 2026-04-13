import type { Metadata } from 'next'
import { Mail, ExternalLink, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — R. Cody Bradshaw',
  description:
    'Operations leader, builder, and the kind of person who gets restless when things could work better but don\'t yet.',
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

      <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] text-balance mb-2 max-w-3xl">
        I&apos;m Cody Bradshaw.
      </h1>
      <p className="text-muted-foreground text-xs italic mb-8">
        fyi full legal name &lsquo;Robert Cody Bradshaw&rsquo; — I&apos;m a
        rare middle name user.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-20">
        I&apos;ve spent my career walking into rooms where the thing that
        needs to exist doesn&apos;t — building it, scaling it, and now doing
        it with AI.
      </p>

      <hr className="border-t border-border mb-20" />

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="md:col-span-1">
          <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase">
            The Work
          </h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I&apos;ve spent 7+ years in ops, support, and program leadership. I
            was the founding operations hire at what&apos;s now Smarter
            Technologies — joined pre-seed, built the support and delivery
            organization from scratch, scaled it to 75+ people across four
            countries, and stuck around through Series B and an acquisition.
          </p>
          <p>
            Along the way I&apos;ve worn a lot of hats — standing up teams,
            designing processes, rolling out tooling, wrangling
            post-acquisition integrations with Deloitte — but the thread that
            connects all of it is the same: I walk into the room where the
            thing that needs to exist doesn&apos;t, and I make it real.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="md:col-span-1">
          <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase">
            What I&apos;m Focused On Now
          </h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            These days I&apos;m focused on the intersection of operations and
            AI. Not the kind that lives in a strategy deck — the kind where
            you get into the actual workflows, find where AI creates real
            leverage, ship it, measure it, and keep going.
          </p>
          <p>
            I believe every company will eventually need an AI enablement
            function, and I&apos;ve been building toward that for the last
            few years.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="md:col-span-1">
          <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase">
            Outside of Work
          </h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I relocated from Chicago to the Austin area in the summer of 2024
            with my wife and two little kids. I travel to Japan as often as I
            can — it&apos;s one of those places that just keeps pulling you
            back.
          </p>
          <p>
            When I&apos;m not working, I&apos;m usually playing with my kids,
            training in my garage gym, riding mountain bikes, or competing in
            whatever video game has my attention that week. I&apos;m also the
            kind of person who will lose three hours going down a conspiracy
            rabbit hole and come out the other side with a fully formed theory
            and zero regrets. A good mystery documentary rounds out the mix.
          </p>
        </div>
      </div>

      <hr className="border-t border-border mb-20" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="md:col-span-1">
          <h2 className="text-foreground font-semibold text-sm tracking-wide uppercase">
            If You&apos;re Hiring
          </h2>
        </div>
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            If you&apos;re here from a job application: thanks for reading
            this far. I hope this gives you a sense of who I am beyond the
            resume.
          </p>
          <p>
            I&apos;m at my best on small, high-agency teams where the work
            punches above its weight — the kind of group that&apos;s five
            people but owns outcomes that move the whole company. I&apos;d
            love to talk if that sounds like something you&apos;re hiring for.
          </p>
        </div>
      </div>

      {/* Contact */}
      <section>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Get in touch
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:bradshawrc93@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
            bradshawrc93@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/cody-bradshaw-41965017b/"
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
      </section>
    </div>
  )
}
