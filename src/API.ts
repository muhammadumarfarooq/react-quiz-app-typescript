import { shuffleArray } from './utils';

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions: FetchQuizQuestions = async (amount: number, difficulty: string) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await ( await fetch(endpoint) ).json();
  return data.results.map((question: Question) => ( {
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  } ))
};

// interface Question {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// }
