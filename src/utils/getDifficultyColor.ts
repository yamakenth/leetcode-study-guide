import { Difficulty } from "../types/Question";

export default function getDifficultyColor(
  difficulty: Difficulty,
  hex: boolean = false
): string {
  switch (difficulty) {
    case "easy":
      return hex ? "#81c784" : "success.light";
    case "medium":
      return hex ? "#ffb74d" : "warning.light";
    case "hard":
      return hex ? "#f44336" : "error.main";
    default:
      return hex ? "#90caf9" : "primary";
  }
}
