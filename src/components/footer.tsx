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
          <Link href="/#apps" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            Apps
          </Link>
          <a href="mailto:bradshawrc93@gmail.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            Email
          </a>
          <a href="https://www.linkedin.com/in/cody-bradshaw-41965017b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
