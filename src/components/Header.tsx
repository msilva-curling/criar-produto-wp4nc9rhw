import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, Search, Menu, LayoutDashboard } from 'lucide-react'
import { UserNav } from '@/components/UserNav'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SidebarNav } from '@/components/Sidebar'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Dashboard</span>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SidebarNav isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-center">
          <div className="w-full max-w-md">
            <form>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="w-full bg-background pl-9"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" className="rounded-full">
            <Plus className="h-5 w-5" />
            <span className="sr-only">Create New</span>
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
