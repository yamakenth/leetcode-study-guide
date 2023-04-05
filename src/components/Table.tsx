import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
} from "@mui/material";
import Question from "../types/Question";
import stringToTitleCase from "../utils/stringToTitleCase";
import getDifficultyColor from "../utils/getDifficultyColor";
import PriorityStatus from "./PriorityStatus";
import getPriorityBgColor from "../utils/getPriorityBgColor";

interface TableProps {
  questions: Question[];
  difficultyFilter: Question["difficulty"][];
  topicFilter: Question["topic"][];
  handlePriorityToggle: (id: number, priority: Question["priority"]) => void;
}

const headings = ["Priority", "Title", "Topic", "Difficulty"];

export default function Table({
  questions,
  difficultyFilter,
  topicFilter,
  handlePriorityToggle,
}: TableProps) {
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
            {questions
              .filter((question) =>
                difficultyFilter.includes(question.difficulty)
              )
              .filter((question) => topicFilter.includes(question.topic))
              .map((question) => (
                <TableRow
                  key={question.questionId}
                  sx={{ bgcolor: getPriorityBgColor(question.priority) }}
                >
                  <TableCell>
                    <PriorityStatus
                      initialPriority={question.priority}
                      handlePriorityToggle={handlePriorityToggle}
                      questionId={question.questionId}
                    />
                  </TableCell>
                  <TableCell>
                    <Link
                      href={question.link}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                    >
                      <Typography>{`${question.questionId}. ${question.questionTitle}`}</Typography>
                    </Link>
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
