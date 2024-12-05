import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, BarChart2, Zap, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-2">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to BarPrep Pro</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Your ultimate companion for bar exam success. Practice smarter, track your progress, and ace your exam with confidence.
      </p>
      <div className="flex space-x-4 mb-12">
        <Button asChild size="lg">
          <Link href="/quiz">Start Practicing</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/dashboard">View Dashboard</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Comprehensive Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cover all essential topics with our extensive question bank and detailed explanations.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart2 className="mr-2 h-5 w-5" />
              Progress Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Monitor your performance with in-depth analytics and personalized study recommendations.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Adaptive Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our AI-powered system adapts to your strengths and weaknesses for efficient studying.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Exam-Ready Confidence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Build confidence through realistic practice exams and performance analysis.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

