import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressOverview({ totalQuestions, answeredQuestions, correctAnswers }) {
  const progressPercentage = (answeredQuestions / totalQuestions) * 100
  const accuracyPercentage = (correctAnswers / answeredQuestions) * 100 || 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-medium">{progressPercentage.toFixed(0)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Accuracy</span>
              <span className="text-sm font-medium">{accuracyPercentage.toFixed(0)}%</span>
            </div>
            <Progress value={accuracyPercentage} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{answeredQuestions}</p>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{totalQuestions - answeredQuestions}</p>
              <p className="text-sm text-muted-foreground">Questions Remaining</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

