import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame } from 'lucide-react'

export function StudyStreak({ currentStreak, longestStreak }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Flame className="mr-2 h-5 w-5 text-orange-500" />
          Study Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{currentStreak}</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{longestStreak}</p>
            <p className="text-sm text-muted-foreground">Longest Streak</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

