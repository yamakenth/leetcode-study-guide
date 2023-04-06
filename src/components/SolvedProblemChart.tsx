import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import QuestionSolved from "../types/QuestionSolved";
import { Difficulty } from "../types/Question";
import stringToTitleCase from "../utils/stringToTitleCase";
import getDifficultyColor from "../utils/getDifficultyColor";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SolvedProblemChartProps {
  questionsSolved: QuestionSolved;
}

const difficulties: Difficulty[] = ["easy", "medium", "hard"];

export default function SolvedProblemChart({
  questionsSolved,
}: SolvedProblemChartProps) {
  const totalInDiff = difficulties.map((diff) => questionsSolved[diff].total);
  const solvedInDiff = difficulties.map((diff) => questionsSolved[diff].solved);
  const total = totalInDiff.reduce((acc, cur) => acc + cur, 0);
  const solved = solvedInDiff.reduce((acc, cur) => acc + cur, 0);
  const unsolved = total - solved;
  const colors = difficulties.map((difficulty) =>
    getDifficultyColor(difficulty, true)
  );

  const data = {
    labels: difficulties.map((difficulty) => stringToTitleCase(difficulty)),
    datasets: [
      {
        data: solvedInDiff.concat(unsolved),
        backgroundColor: colors.concat("#9e9e9e"),
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    events: [],
    cutout: 34,
  };

  return (
    <Box width="100%" height="100%" position="relative">
      <Doughnut data={data} options={options} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="baseline"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="body1">{solved}</Typography>
        <Typography variant="body2" sx={{ color: grey[500] }}>
          /{total}
        </Typography>
      </Box>
    </Box>
  );
}
