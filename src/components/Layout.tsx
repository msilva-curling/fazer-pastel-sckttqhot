import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-header h-14 md:h-[72px] flex items-center justify-center">
        <Link
          to="/"
          className="text-h3-mobile md:text-h2-desktop font-display text-foreground transition-transform duration-200 ease-in-out hover:scale-102"
        >
          pastel de gue
        </Link>
      </header>

      <main className="flex-grow pt-14 md:pt-[72px]">
        <Outlet />
      </main>

      <footer className="w-full py-4 bg-background text-center text-muted-foreground text-sm">
        <p>© 2024 Receitas de Pastel. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
