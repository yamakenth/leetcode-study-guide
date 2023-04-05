import "./App.css";
import MainTable from "./components/MainTable/MainTable";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
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
            <MainTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
