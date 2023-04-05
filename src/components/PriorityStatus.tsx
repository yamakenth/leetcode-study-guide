import { useState } from "react";
import Question from "../types/Question";
import PriorityIcon from "./PriorityIcon";

interface PriorityStatusProps {
  initialPriority: Question["priority"];
  handlePriorityToggle: (
    questionId: number,
    priority: Question["priority"]
  ) => void;
  questionId: number;
}

const statuses: Question["priority"][] = [null, "high", "medium", "low"];

export default function PriorityStatus({
  initialPriority,
  handlePriorityToggle,
  questionId,
}: PriorityStatusProps) {
  const [priority, setPriority] = useState(
    statuses.indexOf(initialPriority) ?? 0
  );

  function handleClick() {
    const newPriority = (priority + 1) % statuses.length;
    setPriority(newPriority);
    handlePriorityToggle(questionId, statuses[newPriority]);
  }

  return (
    <div onClick={handleClick}>
      <PriorityIcon statusId={priority} />
    </div>
  );
}
