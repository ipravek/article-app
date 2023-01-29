import { Container } from "@mui/material";
import "./App.css";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      <Container sx={{ my: 3 }}>
        {/* Articles */}
        <Article />
      </Container>
    </div>
  );
}

export default App;
