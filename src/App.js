import "./App.css";
import Hero from "./components/Hero";
import MovieTopRated from "./components/MovieTopRated";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MovieTopRated />
    </div>
  );
}

export default App;
