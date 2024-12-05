import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from 'lucide-react'

export function StrengthsWeaknesses({ strengths, weaknesses }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Strengths & Weaknesses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <h3 className="flex items-center text-sm font-medium text-green-600 mb-2">
              <TrendingUp className="mr-1 h-4 w-4" />
              Strengths
            </h3>
            <ul className="list-disc list-inside">
              {strengths.map((strength, index) => (
                <li key={index} className="text-sm">{strength}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center text-sm font-medium text-red-600 mb-2">
              <TrendingDown className="mr-1 h-4 w-4" />
              Areas for Improvement
            </h3>
            <ul className="list-disc list-inside">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="text-sm">{weakness}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

