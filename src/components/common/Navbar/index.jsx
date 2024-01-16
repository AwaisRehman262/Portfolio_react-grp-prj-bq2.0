import styles from "./navbar.module.css";
import React from "react";
const Navbar = () => {
  return (
    <>
      <header id="home">
        <nav id={styles.nav}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <a
                href="#home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Sparcz
              </a>
            </div>
            <ul id={styles["nav-links"]}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#section-six-id">Reviews</a>
              </li>
              <li>
                <a href="#colaborations">Collaborations</a>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
