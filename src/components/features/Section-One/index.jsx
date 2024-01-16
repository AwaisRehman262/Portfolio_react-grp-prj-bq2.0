import React from 'react'
import styles from './styles.module.css';

const SectionOne = () => {
  return (
    <main>
    <div className="container">
            <section className={styles['main-section']}>
                <div className={styles.title}>Code Anywhere, Everywhere</div>
                <div className={styles['title-des']}>Dream IDE for Every Developer on Planet <i className="bi bi-globe-americas"></i></div>
                <button id={styles['home-button']} type="button">Download <i className="bi bi-arrow-down-circle-fill"></i></button>
            </section>
           
        </div>
        </main>
  )
}

export default SectionOne;