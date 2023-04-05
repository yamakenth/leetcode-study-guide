import { Grid } from "@mui/material";
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
    <Grid container spacing={1}>
      <Grid item xs={4} md={12}>
        <QuestionsSolvedCard questionsSolved={questionsSolved} />
      </Grid>
      <Grid item xs={4} md={12}>
        <DifficultyCheckboxCard
          difficultyFilter={difficultyFilter}
          filterByDifficulties={filterByDifficulties}
        />
      </Grid>
      <Grid item xs={4} md={12}>
        <TopicCheckboxCard
          topicList={topicList}
          topicFilter={topicFilter}
          filterByTopics={filterByTopics}
        />
      </Grid>
    </Grid>
  );
}
