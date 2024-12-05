import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle'

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Bar Exam Quiz</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/quiz">Quiz</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
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

