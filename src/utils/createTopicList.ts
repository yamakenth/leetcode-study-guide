import Question from "../types/Question";

export default function createTopicList(
  questions: Question[]
): Question["topic"][] {
  const uniqueTopics = new Set<Question["topic"]>();
  questions.forEach((question) => uniqueTopics.add(question.topic));
  const res: Question["topic"][] = Array.from(uniqueTopics);
  return res;
}
