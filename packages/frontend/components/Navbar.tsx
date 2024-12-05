"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle'
import { GavelIcon, BookOpenIcon, BarChartIcon, CrownIcon } from 'lucide-react'

const navItems = [
  { href: '/quiz', label: 'Practice', icon: BookOpenIcon },
  { href: '/dashboard', label: 'Progress', icon: BarChartIcon },
  { href: '/premium', label: 'Premium', icon: CrownIcon },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
          <GavelIcon className="h-8 w-8" />
          <span>BarPrep Pro</span>
        </Link>
        <nav>
          <ul className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  asChild
                  variant={pathname === item.href ? "default" : "ghost"}
                  className="flex items-center space-x-1"
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              </li>
            ))}
            <li><ModeToggle /></li>
            <li>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

