import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Card from "./Card";
import stringToTitleCase from "../utils/stringToTitleCase";
import { ChangeEvent } from "react";

interface TopicCheckboxCardProps {
  topicList: string[];
  topicFilter: string[];
  filterByTopics: (topics: string[]) => void;
}

export default function TopicCheckboxCard({
  topicList,
  topicFilter,
  filterByTopics,
}: TopicCheckboxCardProps) {
  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    const newTopics = [...topicFilter];
    const newTopic = e.target.value as string;
    const idx = newTopics.indexOf(newTopic);
    if (idx !== -1) {
      newTopics.splice(idx, 1);
    } else {
      newTopics.push(newTopic);
    }
    filterByTopics(newTopics);
  }

  return (
    <Card>
      <Typography variant="h6" component="h2" gutterBottom>
        Topics
      </Typography>
      <FormGroup>
        {topicList.map((topic) => (
          <FormControlLabel
            key={topic}
            control={
              <Checkbox
                checked={topicFilter.includes(topic)}
                onChange={handleCheck}
                value={topic}
              />
            }
            label={<Typography>{stringToTitleCase(topic)}</Typography>}
          />
        ))}
      </FormGroup>
    </Card>
  );
}
