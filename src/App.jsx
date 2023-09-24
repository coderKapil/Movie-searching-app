import { useState } from "react";
import MovieCard from "./Components/MovieCard";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

function App() {
  const [allMovieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=23595fac`
      );
      const data = await res.json();
      setMovieData(data.Search);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="bg">
          <SearchBar
            searchMovie={searchMovie}
            setSearchMovie={setSearchMovie}
            fetchMovieData={fetchMovieData}
          />
          <MovieCard allMovieData={allMovieData} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default App;
