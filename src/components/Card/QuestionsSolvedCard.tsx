import { Box, Typography } from "@mui/material";
import QuestionSolved from "../../types/QuestionSolved";
import Card from "./Card";
import getDifficultyColor from "../../utils/getDifficultyColor";
import { grey } from "@mui/material/colors";
import { Difficulty } from "../../types/Question";
import stringToTitleCase from "../../utils/stringToTitleCase";

interface QuestionsSolvedCardProps {
  questionsSolved: QuestionSolved;
}

const difficulties: Difficulty[] = ["easy", "medium", "hard"];

export default function QuestionsSolvedCard({
  questionsSolved,
}: QuestionsSolvedCardProps) {
  return (
    <Card>
      <Typography variant="h6" component="h2" gutterBottom>
        Solved Problems
      </Typography>
      <Box display="flex">
        <Box>Doughnut Chart</Box>
        <Box>
          {difficulties.map((difficulty) => (
            <Box
              key={difficulty}
              display="flex"
              gap={2}
              justifyContent="space-between"
            >
              <Typography color={getDifficultyColor(difficulty)}>
                {stringToTitleCase(difficulty)}
              </Typography>
              <Box display="flex" alignItems="flex-end">
                <Typography variant="body1">
                  {questionsSolved[difficulty].solved}
                </Typography>
                <Typography variant="body2" sx={{ color: grey[500] }}>
                  /{questionsSolved[difficulty].total}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
}
