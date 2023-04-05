import Table from "./components/Table";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import initialQuestions from "./data/question-list.json";
import Question from "./types/Question";
import createQuestions from "./utils/createQuestions";
import useLocalStorageState from "./hooks/useLocalStorageState";

const initialDifficultyFilter: Question["difficulty"][] = [
  "easy",
  "medium",
  "hard",
];

function App() {
  const [questions, setQuestions] = useLocalStorageState<Question[]>(
    "questions",
    createQuestions(initialQuestions)
  );
  const [difficultyFilter, setDifficultyFilter] = useLocalStorageState<
    Question["difficulty"][]
  >("difficulty-filter", initialDifficultyFilter);

  function handlePriorityToggle(id: number, priority: Question["priority"]) {
    const newQuestions = [...questions];
    const targetQuestion = newQuestions.find(
      (question) => question.questionId === id
    );
    if (targetQuestion) {
      targetQuestion.priority = priority;
    }
    setQuestions(newQuestions);
  }

  function filterByDifficulty(difficulties: Question["difficulty"][]) {
    setDifficultyFilter(difficulties);
  }

  return (
    <div className="App">
      <Header />
      <Container sx={{ padding: "24px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Cards
              difficultyFilter={difficultyFilter}
              filterByDifficulties={filterByDifficulty}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Table
              questions={questions}
              difficultyFilter={difficultyFilter}
              handlePriorityToggle={handlePriorityToggle}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
