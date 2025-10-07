import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  LayoutDashboard,
  CheckSquare,
  FileText,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/tasks', label: 'Tasks', icon: CheckSquare },
  { href: '/notes', label: 'Notes', icon: FileText },
  { href: '/settings', label: 'Settings', icon: Settings },
]

interface SidebarNavProps {
  isMobile?: boolean
}

export function SidebarNav({ isMobile = false }: SidebarNavProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { pathname } = useLocation()

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  if (isMobile) {
    return (
      <nav className="flex flex-col h-full p-4">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Dashboard</span>
        </Link>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname === item.href && 'bg-muted text-primary',
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <aside
      className={cn(
        'hidden md:flex flex-col border-r bg-card transition-width duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64',
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          {!isCollapsed && <span className="font-bold text-lg">Dashboard</span>}
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Tooltip key={item.href} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                to={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                  pathname === item.href && 'bg-muted text-primary',
                  isCollapsed && 'justify-center',
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right">{item.label}</TooltipContent>
            )}
          </Tooltip>
        ))}
      </nav>
      <div className="mt-auto p-4 border-t">
        <Button
          variant="ghost"
          size="icon"
          className="w-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <ChevronsRight className="h-5 w-5" />
          ) : (
            <ChevronsLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
    </aside>
  )
}
