import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import questions from "../data/question-list.json";

export default function Table() {
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
              <TableRow key={question.problem_id}>
                <TableCell>!!!</TableCell>
                <TableCell>{`${question.problem_id}. ${question.problem}`}</TableCell>
                <TableCell>{question.category}</TableCell>
                <TableCell>{question.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </div>
  );
}
