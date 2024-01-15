import styles from './navbar.module.css';
import React from 'react';
const Navbar = () => {
    let buttonToggleNavigation = () => {
            
    }
    return (
        

        <>
        <header>
        <nav id={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>Sparcz</div>
                <ul id={styles['nav-links']}>
                    <li><a href="#secOne">About</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#secThree">Docs</a></li>
                    <li><button id={styles.btnOnToggle}><i className="bi bi-filter-right"></i></button></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
    )
}

export default Navbar;