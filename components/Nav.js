import styles from "../styles/Nav.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <header className={`${styles.container} ${show && styles.black}`}>
      <div className={styles.content}>
        <img src="images/logo.svg" alt="" className={styles.logo} />
        <img src="https://rb.gy/qojjrm" alt="" className={styles.avatar} />
      </div>
    </header>
  );
};

export default Nav;
