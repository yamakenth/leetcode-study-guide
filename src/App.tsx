import Table from "./components/Table";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import questionJSON from "./data/question-list.json";
import Question, { Difficulty, Priority } from "./types/Question";
import createQuestions from "./utils/createQuestions";
import useLocalStorageState from "./hooks/useLocalStorageState";
import createTopicList from "./utils/createTopicList";

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
          <Grid item xs={12} md={3}>
            <Cards
              difficultyFilter={difficultyFilter}
              topicList={topicList}
              topicFilter={topicFilter}
              filterByDifficulties={filterByDifficulty}
              filterByTopics={filterByTopics}
            />
          </Grid>
          <Grid item xs={12} md={9}>
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
