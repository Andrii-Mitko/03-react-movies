import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function SearchBar(onSubmit): OrderFormProps {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a
            className={styles.link}
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by TMDB
          </a>
          <form className={styles.form} action={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
            <button className={styles.button} type="submit" onClick={notify}>
              Search
            </button>
            <Toaster />
          </form>
        </div>
      </header>
    </>
  );
}

// Please enter your search query.

// No movies found for your request.
