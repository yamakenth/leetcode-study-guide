import { Difficulty } from "../types/Question";

export default function getDifficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case "easy":
      return "success.light";
    case "medium":
      return "warning.light";
    case "hard":
      return "error.main";
    default:
      return "primary";
  }
}
