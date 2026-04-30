import css from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };
  return (
    <>
      <div className={css.app}>
        <SearchBar />
      </div>
    </>
  );
}

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGMyN2RkNmJiNjUxYWVkNDZkNGMzMTM4YjNjYTkzOCIsIm5iZiI6MTc3NzU2NjAyMC45NCwic3ViIjoiNjlmMzgxNDQwZWQzZDU5N2IxN2ZlNTYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DygvGvZ4a7zy5ltq81Bx69eIyJakmpvbfcXvlS_rEfw

// Повний шлях
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
