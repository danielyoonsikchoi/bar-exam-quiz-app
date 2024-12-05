"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, ChevronRight, RotateCcw } from 'lucide-react'

interface Question {
  _id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`)
        const data = await response.json()
        setQuestions(data)
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    }

    fetchQuestions()
  }, [])

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsAnswered(true)
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
  }

  if (questions.length === 0) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-2xl font-bold">Score: {score}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="mb-4" />
          <p className="mb-4 text-lg font-medium">{questions[currentQuestion].question}</p>
          <RadioGroup onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswered} />
                <Label htmlFor={`option-${index}`} className="flex-grow p-2 rounded-md hover:bg-accent">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleSubmit} disabled={selectedAnswer === null || isAnswered}>
            Submit Answer
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext} disabled={!isAnswered}>
              Next Question
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleRestart} disabled={!isAnswered}>
              Restart Quiz
              <RotateCcw className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
      {isAnswered && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            {selectedAnswer === questions[currentQuestion].correctAnswer ? (
              <div className="flex items-center text-green-600">
                <CheckCircle className="mr-2 h-5 w-5" />
                <p className="text-lg font-medium">Correct! Well done.</p>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <AlertCircle className="mr-2 h-5 w-5" />
                <p className="text-lg font-medium">
                  Incorrect. The correct answer is: {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

