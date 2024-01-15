import React from "react";
import styles from "./styles.module.css";

export const Navigator = () => {
  return (
    <div className={styles.valueProps}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.item} id={styles.intellisense}>
            <a
              className="value-prop"
              id="home-value-prop-intellisense-link"
              href="#meet-intellisense"
            >
              <div className="value-prop-icon intellisense"></div>IntelliSense
            </a>
          </div>
          <div className={styles.item}>
            <a
              className="value-prop"
              id="home-value-prop-debugging-link"
              href="#powerful-debugging"
            >
              <div className="value-prop-icon debugging"></div>Run and Debug
            </a>
          </div>
          <div className={styles.item}>
            <a
              className="value-prop"
              id="home-value-prop-git-link"
              href="#built-in-git"
            >
              <div className="value-prop-icon git"></div>Built-in Git
            </a>
          </div>
          <div className={styles.item}>
            <a
              className="value-prop"
              id="home-value-prop-extensions-link"
              href="#hundreds-of-extensions"
            >
              <div className="value-prop-icon extensions-icon"></div>Extensions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
