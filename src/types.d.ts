interface Question {
  answers: string[];
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface AnswerObject {
  question: string
  answer: string
  isCorrecrAnswer: boolean
  correctAnswer: string
}

//Functions
type FetchQuizQuestions = (amount: number, difficulty: string) => Promise<Question[]>;
type HandleCheckAnswer = (answer: string) => void
