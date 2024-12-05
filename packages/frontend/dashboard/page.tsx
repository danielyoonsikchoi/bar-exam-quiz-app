import { ProgressOverview } from "@/components/dashboard/ProgressOverview"
import { StrengthsWeaknesses } from "@/components/dashboard/StrengthsWeaknesses"
import { StudyStreak } from "@/components/dashboard/StudyStreak"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayIcon, BarChartIcon, BookOpenIcon } from 'lucide-react'

export default function Dashboard() {
  // Mock data - replace with actual API calls in production
  const stats = {
    totalQuestions: 500,
    answeredQuestions: 250,
    correctAnswers: 200,
    strengths: ["Constitutional Law", "Criminal Law", "Torts"],
    weaknesses: ["Contract Law", "Civil Procedure", "Property Law"],
    currentStreak: 5,
    longestStreak: 14
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProgressOverview
          totalQuestions={stats.totalQuestions}
          answeredQuestions={stats.answeredQuestions}
          correctAnswers={stats.correctAnswers}
        />
        <StrengthsWeaknesses
          strengths={stats.strengths}
          weaknesses={stats.weaknesses}
        />
        <StudyStreak
          currentStreak={stats.currentStreak}
          longestStreak={stats.longestStreak}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full flex items-center justify-center" size="lg">
              <PlayIcon className="mr-2 h-4 w-4" />
              Start Practice Quiz
            </Button>
            <Button className="w-full flex items-center justify-center" variant="outline" size="lg">
              <BarChartIcon className="mr-2 h-4 w-4" />
              View Detailed Analytics
            </Button>
            <Button className="w-full flex items-center justify-center" variant="outline" size="lg">
              <BookOpenIcon className="mr-2 h-4 w-4" />
              Review Missed Questions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

