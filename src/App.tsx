import Table from "./components/Table";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";
import initialQuestions from "./data/question-list.json";
import Question from "./types/Question";
import createQuestions from "./utils/createQuestions";
import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
  const [questions, setQuestions] = useLocalStorageState<Question[]>(
    "questions",
    createQuestions(initialQuestions)
  );

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

  return (
    <div className="App">
      <Header />
      <Container sx={{ padding: "24px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={9}>
            <Table
              questions={questions}
              handlePriorityToggle={handlePriorityToggle}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
