import Question from "../types/Question";

export default function getDifficultyColor(
  difficulty: Question["difficulty"]
): string {
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
