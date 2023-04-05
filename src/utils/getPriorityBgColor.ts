import { amber, green, red } from "@mui/material/colors";
import { Priority } from "../types/Question";

export default function getPriorityBgColor(priority: Priority): string {
  switch (priority) {
    case "high":
      return red[100];
    case "medium":
      return amber[100];
    case "low":
      return green[100];
    default:
      return "inherit";
  }
}
