export default interface Question {
  questionId: number;
  questionTitle: string;
  link: string;
  topic: string;
  priority: "high" | "medium" | "low" | null;
  difficulty: "easy" | "medium" | "hard";
}
