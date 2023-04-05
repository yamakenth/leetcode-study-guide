import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Question from "../types/Question";
import stringToTitleCase from "../utils/stringToTitleCase";

interface TableProps {
  questions: Question[];
}

export default function Table({ questions }: TableProps) {
  return (
    <div>
      <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Priority</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Difficulty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.questionId}>
                <TableCell>{question.priority}</TableCell>
                <TableCell>{`${question.questionId}. ${question.questionTitle}`}</TableCell>
                <TableCell>{question.topic}</TableCell>
                <TableCell>{stringToTitleCase(question.difficulty)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </div>
  );
}
