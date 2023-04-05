import Table from "./components/Table";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{ padding: "24px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={9}>
            <Table />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
