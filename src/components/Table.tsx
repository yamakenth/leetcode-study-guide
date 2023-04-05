import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Question from "../types/Question";
import stringToTitleCase from "../utils/stringToTitleCase";
import getDifficultyColor from "../utils/getDifficultyColor";

interface TableProps {
  questions: Question[];
}

const headings = ["Priority", "Title", "Topic", "Difficulty"];

export default function Table({ questions }: TableProps) {
  return (
    <div>
      <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <TableCell key={heading}>
                  <Typography>{heading}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.questionId}>
                <TableCell>
                  <Typography>{question.priority}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{`${question.questionId}. ${question.questionTitle}`}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{question.topic}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color={getDifficultyColor(question.difficulty)}>
                    {stringToTitleCase(question.difficulty)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </div>
  );
}
