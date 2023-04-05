import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Card from "./Card";
import getDifficultyColor from "../utils/getDifficultyColor";
import Question from "../types/Question";
import { ChangeEvent } from "react";
import stringToTitleCase from "../utils/stringToTitleCase";

interface DifficultyCheckboxCardProps {
  difficultyFilter: Question["difficulty"][];
  filterByDifficulties: (difficulties: Question["difficulty"][]) => void;
}

const difficulties: Question["difficulty"][] = ["easy", "medium", "hard"];

export default function DifficultyCheckboxCard({
  difficultyFilter,
  filterByDifficulties,
}: DifficultyCheckboxCardProps) {
  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    const newDifficulties = [...difficultyFilter];
    const newDifficulty = e.target.value as Question["difficulty"];
    const idx = newDifficulties.indexOf(newDifficulty);
    if (idx !== -1) {
      newDifficulties.splice(idx, 1);
    } else {
      newDifficulties.push(newDifficulty);
    }
    filterByDifficulties(newDifficulties);
  }

  return (
    <Card>
      <Typography variant="h6" component="h2" gutterBottom>
        Difficulty
      </Typography>
      <FormGroup>
        {difficulties.map((difficulty) => (
          <FormControlLabel
            key={difficulty}
            control={
              <Checkbox
                checked={difficultyFilter.includes(difficulty)}
                onChange={handleCheck}
                value={difficulty}
              />
            }
            label={
              <Typography color={getDifficultyColor(difficulty)}>
                {stringToTitleCase(difficulty)}
              </Typography>
            }
          />
        ))}
      </FormGroup>
    </Card>
  );
}
