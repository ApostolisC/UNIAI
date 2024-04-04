// components/Navigation.tsx

import Link from 'next/link';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const Navigation = () => {

  useEffect(() => {
    // JavaScript code to be executed after component mounts
    const image1 = document.querySelector(`.${styles.image1}`) as HTMLElement;
    const image2 = document.querySelector(`.${styles.image2}`) as HTMLElement;
    if (image1){
      setTimeout(() => {
        image1.style.opacity = '1'; // Set opacity to 1i
        image1.style.transition = 'opacity 1s ease-in-out';
      }, 1000);
    }
    if (image2){
      setTimeout(() => {
        image2.style.opacity = '1'; // Set opacity to 1
        image2.style.transition = 'opacity 1s ease-in-out';
      }, 2000);
    }
  }, []);

  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header id="header" className={styles.header}>
      <div id="site-header-inner" className={styles.container}>
        <ul className={styles.navigationList}>
          <li>
            <img className={styles.logo} src="/logo.png" alt="Logo" width="135" height="45" />
          </li>

          <li className={styles.about_us_li} onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
            <Link href="/">
              Σχετικά με Εμάς
              <span className={styles.navArrow}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </Link>

            {showSubMenu && (
              <ul className={styles.subMenu}>
                <li><Link id={styles.sublink1} className={styles.subMenuLink} href="/meet-the-team">Γνώρισε την Ομάδα μας</Link></li>
                <li><Link className={styles.subMenuLink} href="/become-a-member">  Γίνε Μέλος</Link></li>
              </ul>
            )}

          </li>
          <li className={styles.menuItem}>
            <Link href="/become-a-partner">
              Γίνε Συνεργάτης
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/uniai-network">
              UniAI.net
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/events">
              Οι Δράσεις μας
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/blog">
              Αρθογραφία
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="https://makeathon.uniai.gr/">
              Makeathon
            </Link>
          </li>
          <li className={styles.language_globe}>
            <Link href="/">
                <FontAwesomeIcon icon={faGlobe} /> {/* Add globe icon */}
                <span className={styles.navArrow}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={`${styles.image_container} ${styles.hidden}`}>
        <img className={styles.image1} src="/wires.png" alt="Logo"/>
        <img className={styles.image2} src="/logo2.png" alt="Logo"/>

      </div>

    </header>
  );
};

export default Navigation;
