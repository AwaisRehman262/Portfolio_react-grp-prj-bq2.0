import React from 'react';
import styles from './styles.module.css';
const SectionTwo = () => {
  return (
    <section id="secOne" className={styles['section-one']}>
         <div className={styles.sectwodesc}>Terminal Support, Allows to Debug <i className="bi bi-bug-fill"></i> Easily</div>
         <div className={styles.sectionpic} />
    </section>
    )
  }
export default SectionTwo;