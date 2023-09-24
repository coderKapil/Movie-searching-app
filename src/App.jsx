import MovieCard from "./Components/MovieCard";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg">
          <SearchBar />
          <MovieCard />
        </div>
      </div>
    </>
  );
}

export default App;
