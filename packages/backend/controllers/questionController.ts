import { Request, Response } from 'express';
import Question from '../models/Question';

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { question, options, correctAnswer, subject, difficulty } = req.body;
    const newQuestion = new Question({
      question,
      options,
      correctAnswer,
      subject,
      difficulty
    });
    const createdQuestion = await newQuestion.save();
    res.status(201).json(createdQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { question, options, correctAnswer, subject, difficulty } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { question, options, correctAnswer, subject, difficulty },
      { new: true }
    );
    if (updatedQuestion) {
      res.json(updatedQuestion);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (deletedQuestion) {
      res.json({ message: 'Question removed' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

