// components/Navigation.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navigation.module.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Navigation = () => {
  return (
      <nav className={styles.navContainer}>
          <Image className={styles.logo} src="/logo.png" alt="Logo" width={135} height={45}/>
          <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Σχετικά με Εμάς</Link></li>
              <li><Link href="/become-a-partner" className={styles.navLink}>Γίνε Συνεργάτης</Link></li>
              <li><Link href="/uniai-network" className={styles.navLink}>UniAI.net</Link></li>
              <li><Link href="/events" className={styles.navLink}>Οι Δράσεις μας</Link></li>
              <li><Link href="/blog" className={styles.navLink}>Αρθογραφία</Link></li>
              <li><Link href="https://makeathon.uniai.gr/" className={styles.navLink}>Makeathon</Link></li>
              <li><Link href="/"><i className="fas fa-globe"></i> {/* This is the globe icon */}</Link></li>
          </ul>
      </nav>
  );
};

export default Navigation;
