import Question from "../types/Question";
import QuestionSolved from "../types/QuestionSolved";

export default function calculateQuestionsSolved(
  questions: Question[]
): QuestionSolved {
  const res: QuestionSolved = {
    easy: { total: 0, solved: 0 },
    medium: { total: 0, solved: 0 },
    hard: { total: 0, solved: 0 },
  };
  questions.forEach((question) => {
    res[question.difficulty].total++;
    if (question.priority !== null) {
      res[question.difficulty].solved++;
    }
  });
  return res;
}
