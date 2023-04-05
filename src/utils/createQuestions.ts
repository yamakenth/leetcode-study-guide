import Question from "../types/Question";
import RawQuestion from "../types/RawQuestion";

export default function createQuestions(raw: RawQuestion[]): Question[] {
  const res: Question[] = [];

  raw.forEach(({ problem_id, problem, link, category, difficulty }) => {
    res.push({
      questionId: parseInt(problem_id),
      questionTitle: problem,
      link: link,
      topic: category,
      priority: null,
      difficulty: difficulty.toLowerCase() as Question["difficulty"],
    });
  });

  return res;
}
