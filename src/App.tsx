import css from "./App.module.css";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import { useState } from "react";
import MovieModal from "./components/MovieModal/MovieModal";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchMovies } from "./services/movieService";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);

      const data = await fetchMovies(topic);

      setMovies(data.results);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {isLoading && <Loader />}

      <MovieGrid
        movies={movies}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
    </div>
  );
}
