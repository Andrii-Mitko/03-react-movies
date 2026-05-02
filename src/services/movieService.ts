import axios from "axios";

export async function fetchMovies(query: string) {
  const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return res.data;
}
