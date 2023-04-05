import {
  CalendarToday,
  Done,
  HorizontalRule,
  PriorityHigh,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface PriorityIconProps {
  statusId: number;
}

export default function PriorityIcon({ statusId }: PriorityIconProps) {
  switch (statusId) {
    case 0:
      return (
        <IconButton aria-label="status-todo" size="small">
          <CalendarToday fontSize="inherit" />
        </IconButton>
      );
    case 1:
      return (
        <IconButton
          aria-label="status-high-priority"
          size="small"
          color="error"
        >
          <PriorityHigh fontSize="inherit" />
        </IconButton>
      );
    case 2:
      return (
        <IconButton
          aria-label="status-medium-priority"
          size="small"
          color="warning"
        >
          <HorizontalRule fontSize="inherit" />
        </IconButton>
      );
    case 3:
      return (
        <IconButton
          aria-label="status-low-priority"
          size="small"
          color="success"
        >
          <Done fontSize="inherit" />
        </IconButton>
      );
    default:
      return <></>;
  }
}
