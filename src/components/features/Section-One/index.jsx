import React from 'react'
import styles from './styles.module.css';

const SectionOne = () => {
  return (
    <main>
    <div className="container">
            <section className={styles['main-section']}>
                <div className={styles.title}>Code Anyone, Anywhere, Everywhere </div>
                <div className={styles['title-des']}>A Dream IDE for every developer on Planet <i className="bi bi-code-slash"></i></div>
                <button id={styles['home-button']} type="button">Download <i className="bi bi-download"></i></button>
            </section>
           
        </div>
        </main>
  )
}

export default SectionOne;