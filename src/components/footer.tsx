export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <p className="text-muted-foreground text-sm text-center">
          &copy; {new Date().getFullYear()} R. Cody Bradshaw. Built with Next.js &middot; Deployed on Vercel.
        </p>
      </div>
    </footer>
  )
}
