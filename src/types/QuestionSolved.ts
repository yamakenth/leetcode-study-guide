export interface QuestionSolvedEntry {
  total: number;
  solved: number;
}

export default interface QuestionSolved {
  easy: QuestionSolvedEntry;
  medium: QuestionSolvedEntry;
  hard: QuestionSolvedEntry;
}
