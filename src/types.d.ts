interface Question {
  answers: string[];
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}


//Functions
type FetchQuizQuestions = (amount: number, difficulty: string) => Promise<Question[]>;
type HandleNextQuestion = () => void
