import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SidebarNav } from '@/components/Sidebar'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <SidebarNav />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
