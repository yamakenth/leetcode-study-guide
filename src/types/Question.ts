export type Priority = "high" | "medium" | "low" | null;

export type Difficulty = "easy" | "medium" | "hard";

export default interface Question {
  questionId: number;
  questionTitle: string;
  link: string;
  topic: string;
  priority: Priority;
  difficulty: Difficulty;
}
