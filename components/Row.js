import { useEffect, useState } from "react";
import styles from "../styles/Row.module.css";
import Image from "next/image";
import axios from "../axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                loading="lazy"
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                className={`${styles.poster} ${
                  isLargeRow && styles.posterLarge
                }`}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
