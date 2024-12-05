import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Bar Exam Quiz App</h1>
      <p className="text-xl mb-8">Prepare for your bar exam with our interactive quizzes</p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/quiz">Start Quiz</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}

