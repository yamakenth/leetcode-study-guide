import Table from "./components/Table";
import Header from "./containers/Header";
import CardContainer from "./containers/CardContainer";
import { Container, Grid } from "@mui/material";
import questionJSON from "./data/question-list.json";
import Question, { Difficulty, Priority } from "./types/Question";
import createQuestions from "./utils/createQuestions";
import useLocalStorageState from "./hooks/useLocalStorageState";
import createTopicList from "./utils/createTopicList";
import calculateQuestionsSolved from "./utils/calculateQuestionsSolved";

const initialQuestions = createQuestions(questionJSON);
const initialDifficultyFilter: Difficulty[] = ["easy", "medium", "hard"];

function App() {
  const [questions, setQuestions] = useLocalStorageState<Question[]>(
    "questions",
    initialQuestions
  );
  const [difficultyFilter, setDifficultyFilter] = useLocalStorageState<
    Difficulty[]
  >("difficulty-filter", initialDifficultyFilter);
  const topicList = createTopicList(questions);
  const [topicFilter, setTopicFilter] = useLocalStorageState<string[]>(
    "topic-filter",
    topicList
  );

  function handlePriorityToggle(id: number, priority: Priority) {
    const newQuestions = [...questions];
    const targetQuestion = newQuestions.find(
      (question) => question.questionId === id
    );
    if (targetQuestion) {
      targetQuestion.priority = priority;
    }
    setQuestions(newQuestions);
  }

  function filterByDifficulty(difficulties: Difficulty[]) {
    setDifficultyFilter(difficulties);
  }

  function filterByTopics(topics: string[]) {
    setTopicFilter(topics);
  }

  return (
    <div className="App">
      <Header />
      <Container sx={{ padding: "24px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <CardContainer
              difficultyFilter={difficultyFilter}
              topicList={topicList}
              topicFilter={topicFilter}
              filterByDifficulties={filterByDifficulty}
              filterByTopics={filterByTopics}
              questionsSolved={calculateQuestionsSolved(questions)}
            />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Table
              questions={questions}
              difficultyFilter={difficultyFilter}
              topicFilter={topicFilter}
              handlePriorityToggle={handlePriorityToggle}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
