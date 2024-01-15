import React from 'react'
import styles from './styles.module.css';

const SectionOne = () => {
  return (
    <main>
    <div className="container">
            <section className={styles['main-section']}>
                <div className={styles.title}>Code Everything, Anywhere</div>
                <div className={styles['title-des']}>Support 10+ Programming Languges like C, C++, Rust, Go, Kotlin, and  JS Frameworks like React, Vue, Angular    
                </div>
                <button id={styles['home-button']} type="button">Download</button>
            </section>
           
        </div>
        </main>
  )
}

export default SectionOne;