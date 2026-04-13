import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} R. Cody Bradshaw. Built with Next.js &middot; Deployed on Vercel.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            About
          </Link>
          <Link href="/how-i-operate" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            How I Operate
          </Link>
          <a href="mailto:bradshawrc93@gmail.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            Email
          </a>
          <a href="https://linkedin.com/in/bradshawrc93" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
