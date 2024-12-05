import express from 'express';
import { getQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion } from '../controllers/questionController';

const router = express.Router();

router.route('/').get(getQuestions).post(createQuestion);
router.route('/:id').get(getQuestionById).put(updateQuestion).delete(deleteQuestion);

export default router;

