import React from 'react'
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer>
        <div>Sparcz</div>
        <div className={styles.footerDesc}>&copy; All Copyrights by Three3D Developers 2024</div>
        <div className={styles.footerSm}><a href="#" title="Contribute to Open Source"><i className="bi bi-github"></i></a><a href="#" title="Download on SourceFourge"><i className="bi bi-sourceforge"></i></a></div>
    </footer>
  )
}

export default Footer;