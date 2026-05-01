import axios from "axios";

export async function fetchMovies(query: string) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMyN2RkNmJiNjUxYWVkNDZkNGMzMTM4YjNjYTkzOCIsIm5iZiI6MTc3NzU2NjAyMC45NCwic3ViIjoiNjlmMzgxNDQwZWQzZDU5N2IxN2ZlNTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DygvGvZ4a7zy5ltq81Bx69eIyJakmpvbfcXvlS_rEfw",
    },
  };

  const res = await axios.request(options);
  return res.data;
}
