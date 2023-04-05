import Question from "../types/Question";

export default function createTopicList(questions: Question[]): string[] {
  const uniqueTopics = new Set<string>();
  questions.forEach((question) => uniqueTopics.add(question.topic));
  const res: string[] = Array.from(uniqueTopics);
  return res;
}
