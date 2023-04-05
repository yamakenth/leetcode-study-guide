import { Grid, Typography } from "@mui/material";
import Card from "../components/Card";
import DifficultyCheckboxCard from "../components/DifficultyCheckboxCard";
import { Difficulty } from "../types/Question";
import TopicCheckboxCard from "../components/TopicCheckboxCard";

interface CardContainerProps {
  difficultyFilter: Difficulty[];
  topicList: string[];
  topicFilter: string[];
  filterByDifficulties: (difficulties: Difficulty[]) => void;
  filterByTopics: (topics: string[]) => void;
}

export default function CardContainer({
  difficultyFilter,
  topicList,
  topicFilter,
  filterByTopics,
  filterByDifficulties,
}: CardContainerProps) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} md={12}>
        <Card>
          <Typography variant="h6" component="h2" gutterBottom>
            Solved Problems
          </Typography>
        </Card>
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
