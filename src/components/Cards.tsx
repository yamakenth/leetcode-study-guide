import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import DifficultyCheckboxCard from "./DifficultyCheckboxCard";
import Question from "../types/Question";

interface CardsProps {
  difficultyFilter: Question["difficulty"][];
  filterByDifficulties: (difficulties: Question["difficulty"][]) => void;
}

export default function Cards({
  difficultyFilter,
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
        <Card>
          <Typography variant="h6" component="h2" gutterBottom>
            Topics
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
