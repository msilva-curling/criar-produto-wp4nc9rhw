import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SidebarNav } from '@/components/Sidebar'

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="flex flex-row min-h-screen">
        <SidebarNav />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
