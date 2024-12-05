import Link from 'next/link'
import { GavelIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <GavelIcon className="h-6 w-6" />
          <span className="font-bold">BarPrep Pro</span>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </nav>
        <p className="mt-4 md:mt-0">&copy; 2024 BarPrep Pro. All rights reserved.</p>
      </div>
    </footer>
  )
}

