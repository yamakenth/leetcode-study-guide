import { Box } from "@mui/material";
import DifficultyCheckboxCard from "../components/Card/DifficultyCheckboxCard";
import { Difficulty } from "../types/Question";
import TopicCheckboxCard from "../components/Card/TopicCheckboxCard";
import QuestionSolved from "../types/QuestionSolved";
import QuestionsSolvedCard from "../components/Card/QuestionsSolvedCard";

interface CardContainerProps {
  difficultyFilter: Difficulty[];
  topicList: string[];
  topicFilter: string[];
  filterByDifficulties: (difficulties: Difficulty[]) => void;
  filterByTopics: (topics: string[]) => void;
  questionsSolved: QuestionSolved;
}

export default function CardContainer({
  difficultyFilter,
  topicList,
  topicFilter,
  filterByTopics,
  filterByDifficulties,
  questionsSolved,
}: CardContainerProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "row", lg: "column" }}
      gap={2}
      flexWrap="wrap"
    >
      <QuestionsSolvedCard questionsSolved={questionsSolved} />
      <DifficultyCheckboxCard
        difficultyFilter={difficultyFilter}
        filterByDifficulties={filterByDifficulties}
      />
      <TopicCheckboxCard
        topicList={topicList}
        topicFilter={topicFilter}
        filterByTopics={filterByTopics}
      />
    </Box>
  );
}
