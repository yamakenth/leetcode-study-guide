import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function Cards() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={12}>
        <Card sx={{ maxWidth: 240, height: 180, marginBottom: 4 }}>
          <CardContent>
            <Typography variant="subtitle1" component="h2">
              Solved Problems
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={12}>
        <Card sx={{ maxWidth: 240, height: 180, marginBottom: 4 }}>
          <CardContent>
            <Typography variant="subtitle1" component="h2">
              Difficulty
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={12}>
        <Card sx={{ maxWidth: 240, height: 180, marginBottom: 4 }}>
          <CardContent>
            <Typography variant="subtitle1" component="h2">
              Topics
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
