'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faAngleDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Navigation: React.FC = () => {
    const router = useRouter();
    const { t, i18n } = serverSideTranslations('common');

    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
    const [isLanguageSwitcherHovered, setLanguageSwitcherHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        setIsMobileSubmenuOpen(false);
    }, []);
    const toggleMobileSubmenu = useCallback(() => setIsMobileSubmenuOpen((prev) => !prev), []);
    const handleLanguageChange = useCallback((locale: string) => {
        i18n.changeLanguage(locale);
        setLanguageSwitcherHovered(false);
    }, [i18n]);

    return (
        <nav className="flex flex-col items-center py-5 border-b-2 border-[#71500b] w-full bg-[#1C1C1C]">
            {/* Logo Section */}
            <div className="flex justify-between items-center w-full px-5">
                <div
                    onClick={() => {
                        router.push('/');
                        closeMenu();
                    }}
                    className="inline-block cursor-pointer transition-opacity duration-200 ease-in-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ opacity: isHovered ? 0.5 : 1 }}
                >
                    <Image
                        src={isMobileOrTablet ? "/logo_small.png" : "/logo.png"}
                        alt="Logo"
                        width={isMobileOrTablet ? 45 : 130}
                        height={45}
                        className="m-0 ml-[5vw] flex-shrink-0"
                    />
                </div>

                {/* Mobile Menu */}
                {isMobileOrTablet ? (
                    <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="ml-2">Menu</span>
                    </div>
                ) : (
                    /* Desktop Navigation Links */
                    <DesktopMenu
                        isSubmenuOpen={isSubmenuOpen}
                        setIsSubmenuOpen={setIsSubmenuOpen}
                        setLanguageSwitcherHovered={setLanguageSwitcherHovered}
                        handleLanguageChange={handleLanguageChange}
                        isLanguageSwitcherHovered={isLanguageSwitcherHovered}
                        t={t}
                    />
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileOrTablet && isMenuOpen && (
                <MobileMenu
                    isMobileSubmenuOpen={isMobileSubmenuOpen}
                    toggleMobileSubmenu={toggleMobileSubmenu}
                    closeMenu={closeMenu}
                />
            )}
        </nav>
    );
};

/* Example for separating DesktopMenu and MobileMenu into components */
const DesktopMenu = ({
    isSubmenuOpen,
    setIsSubmenuOpen,
    isLanguageSwitcherHovered,
    setLanguageSwitcherHovered,
    handleLanguageChange,
    t,
}: any) => (
    <ul className="flex items-center list-none m-0 mr-[5vw] h-[100%] tracking-wide">
        {/* Add desktop menu items here */}
    </ul>
);

const MobileMenu = ({ isMobileSubmenuOpen, toggleMobileSubmenu, closeMenu }: any) => (
    <ul className="flex flex-col list-none mt-5 w-full bg-[#202020] text-white border-t-2 border-[#71500b]">
        {/* Add mobile menu items here */}
    </ul>
);

export default Navigation;
