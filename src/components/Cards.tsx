import { Grid, Typography } from "@mui/material";
import Card from "./Card";

export default function Cards() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} md={12}>
        <Card>
          <Typography variant="subtitle1" component="h2">
            Solved Problems
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={4} md={12}>
        <Card>
          <Typography variant="subtitle1" component="h2">
            Difficulty
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={4} md={12}>
        <Card>
          <Typography variant="subtitle1" component="h2">
            Topics
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
