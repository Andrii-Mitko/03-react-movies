import axios from "axios";

function fetchMovies() {
  const options = {
    params: {
      id: 0,
      poster_path: "",
      backdrop_path: "",
      title: "",
      overview: "",
      release_date: "",
      vote_average: 0,
    },
    headers: {
      Authorization: `Bearer       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMyN2RkNmJiNjUxYWVkNDZkNGMzMTM4YjNjYTkzOCIsIm5iZiI6MTc3NzU2NjAyMC45NCwic3ViIjoiNjlmMzgxNDQwZWQzZDU5N2IxN2ZlNTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DygvGvZ4a7zy5ltq81Bx69eIyJakmpvbfcXvlS_rEfw",
`,
    },
  };

  const options2 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMyN2RkNmJiNjUxYWVkNDZkNGMzMTM4YjNjYTkzOCIsIm5iZiI6MTc3NzU2NjAyMC45NCwic3ViIjoiNjlmMzgxNDQwZWQzZDU5N2IxN2ZlNTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DygvGvZ4a7zy5ltq81Bx69eIyJakmpvbfcXvlS_rEfw",
    },
  };

  axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}

export default fetchMovies;
