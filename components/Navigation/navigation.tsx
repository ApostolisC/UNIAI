'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navContainer}>
            <div className={styles.topNav}>
                <div 
                    onClick={() => router.push('/')} 
                    style={{ 
                        cursor: 'pointer', 
                        display: 'inline-block',
                        opacity: isHovered ? 0.5 : 1,
                        transition: 'opacity 0.2s ease-in-out 0.1s'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isMobile ? (
                        <Image src="/logo_small.png" alt="Logo" width={45} height={45} className={styles.logo}/>
                    ) : (
                        <Image src="/logo.png" alt="Logo" width={130} height={45} className={styles.logo}/>
                    )}
                </div>

                {isMobile ? (
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                        <span className={styles.menu_span}>Menu</span>
                    </div>
                ) : (
                    <ul className={styles.navList}>
                        <li><Link href="/" className={styles.navLink}>Σχετικά με Εμάς</Link></li>
                        <li><Link href="/become-a-partner" className={styles.navLink}>Γίνε Συνεργάτης</Link></li>
                        <li><Link href="/uniai-network" className={styles.navLink}>UniAI.net</Link></li>
                        <li><Link href="/events" className={styles.navLink}>Οι Δράσεις μας</Link></li>
                        <li><Link href="/blog" className={styles.navLink}>Αρθογραφία</Link></li>
                        <li><Link href="https://makeathon.uniai.gr/" className={styles.navLink}>Makeathon</Link></li>
                        <li><Link href="/" className={styles.navLink}>
                            <FontAwesomeIcon icon={faGlobe} />
                        </Link></li>
                    </ul>
                )}
            </div>

            {isMobile && isMenuOpen && (
                <ul className={styles.navListMobile}>
                    <li><Link href="/" className={styles.navLink}>Σχετικά με Εμάς</Link></li>
                    <li><Link href="/become-a-partner" className={styles.navLink}>Γίνε Συνεργάτης</Link></li>
                    <li><Link href="/uniai-network" className={styles.navLink}>UniAI.net</Link></li>
                    <li><Link href="/events" className={styles.navLink}>Οι Δράσεις μας</Link></li>
                    <li><Link href="/blog" className={styles.navLink}>Αρθογραφία</Link></li>
                    <li><Link href="https://makeathon.uniai.gr/" className={styles.navLink}>Makeathon</Link></li>
                    <li><Link href="/" className={styles.navLink}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
