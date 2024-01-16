import React from 'react';
import styles from './styles.module.css';
const SectionTwo = () => {
  return (
    <section id="secOne" className={styles['section-one']}>
         <div className={styles.sectwodesc}>Terminal Integrated, Run , Debug <i className="bi bi-bug-fill"></i> easily</div>
         <div className={styles.sectionpic} />
    </section>
    )
  }
export default SectionTwo;