import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import DifficultyCheckboxCard from "./DifficultyCheckboxCard";
import { Difficulty } from "../types/Question";
import TopicCheckboxCard from "./TopicCheckboxCard";

interface CardsProps {
  difficultyFilter: Difficulty[];
  topicList: string[];
  topicFilter: string[];
  filterByDifficulties: (difficulties: Difficulty[]) => void;
  filterByTopics: (topics: string[]) => void;
}

export default function Cards({
  difficultyFilter,
  topicList,
  topicFilter,
  filterByTopics,
  filterByDifficulties,
}: CardsProps) {
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
