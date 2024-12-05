"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data - replace with actual API call in production
const mockQuestion = {
  id: 1,
  question: "Which of the following is NOT a source of law?",
  options: [
    "Statutes",
    "Case law",
    "Administrative regulations",
    "Public opinion"
  ],
  correctAnswer: 3
}

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsAnswered(true)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Question {mockQuestion.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{mockQuestion.question}</p>
        <RadioGroup onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
          {mockQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswered} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={selectedAnswer === null || isAnswered}>
          Submit Answer
        </Button>
      </CardFooter>
      {isAnswered && (
        <CardContent>
          <p className={selectedAnswer === mockQuestion.correctAnswer ? "text-green-600" : "text-red-600"}>
            {selectedAnswer === mockQuestion.correctAnswer ? "Correct!" : "Incorrect. The correct answer is: " + mockQuestion.options[mockQuestion.correctAnswer]}
          </p>
        </CardContent>
      )}
    </Card>
  )
}

