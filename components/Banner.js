import styles from "../styles/Banner.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  console.log(movie);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.buttons}>
          <button className={styles.button}>Play</button>
          <button className={styles.button}>My List</button>
        </div>
        <h1 className={styles.description}>
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className={styles.fadeBottom} />
    </div>
  );
};

export default Banner;
