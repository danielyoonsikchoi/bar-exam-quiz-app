import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2024 Bar Exam Quiz App</p>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

