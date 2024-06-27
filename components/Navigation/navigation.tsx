'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faAngleDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024); // Adjusted breakpoint to include tablets
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubmenu = (isOpen: boolean | ((prevState: boolean) => boolean)) => {
        setIsSubmenuOpen(isOpen);
    };

    const toggleMobileSubmenu = () => {
        setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
    };


    return (
        <nav className="flex flex-col items-center py-5 border-b-2 border-[#71500b] w-full bg-[#1C1C1C]">
            <div className="flex justify-between items-center w-full px-5">
                <div 
                    onClick={() => router.push('/')} 
                    className="inline-block cursor-pointer transition-opacity duration-200 ease-in-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ opacity: isHovered ? 0.5 : 1 }}
                >
                    {isMobileOrTablet ? (
                        <Image src="/logo_small.png" alt="Logo" width={45} height={45} className="m-0 ml-[5vw] flex-shrink-0" />
                    ) : (
                        <Image src="/logo.png" alt="Logo" width={130} height={45} className="m-0 ml-[5vw] flex-shrink-0" />
                    )}
                </div>

                {isMobileOrTablet ? (
                    <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="ml-2">Menu</span>
                    </div>
                ) : (
                    <ul className="flex items-center list-none m-0 mr-[5vw] h-[100%] tracking-wide">
                        <li 
                            onMouseEnter={() => toggleSubmenu(true)}
                            onMouseLeave={() => toggleSubmenu(false)}
                            className="relative mr-2"
                        >
                            <Link href="/" className="group inline-flex items-center text-inherit font-bold text-[16px] mr-[20px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">
                                Σχετικά με Εμάς
                                <FontAwesomeIcon 
                                    icon={faAngleDown} 
                                    className="ml-2 text-white group-hover:text-[#FF8210] transition-colors duration-200 ease-in-out"
                                />
                            </Link>
                            {isSubmenuOpen && (
                                <ul className="absolute right-2 bg-[#1C1C1C] shadow-lg rounded-md z-50">
                                    <div className="h-[20px] w-full"></div>
                                    <li><Link href="/meet-the-team" className="block py-2 px-4 text-white text-wrap w-44 text-sm whitespace-nowrap transition-colors duration-200 ease-in-out border-t-2 border-[#FF8210] hover:text-[#A754C8]">Γνώρισε την Ομάδα μας</Link></li>
                                    <li><Link href="/become-a-member" className="block py-2 px-4 text-white whitespace-nowrap text-sm transition-colors duration-200 ease-in-out border-t-[1px] border-[#FF8210] hover:text-[#A754C8]">Γίνε μέλος</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="mr-7"><Link href="/become-a-partner" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">Γίνε Συνεργάτης</Link></li>
                        <li className="mr-7"><Link href="/uniai-network" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">UniAI.net</Link></li>
                        <li className="mr-7"><Link href="/events" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">Οι Δράσεις μας</Link></li>
                        <li className="mr-7"><Link href="/blog" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">Αρθογραφία</Link></li>
                        <li className="mr-7"><Link href="https://makeathon.uniai.gr/" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">Makeathon</Link></li>
                        <li className="mr-7"><Link href="/" className="group inline-flex items-center text-inherit font-bold text-[16px] leading-[1.5] transition-colors duration-200 ease-in-out border-b-2 border-transparent py-2 px-0 whitespace-nowrap overflow-hidden text-ellipsis hover:border-[#A754C8] hover:text-[#FF8210]">
                            <FontAwesomeIcon icon={faGlobe} />
                        </Link></li>
                    </ul>
                )}
            </div>

            {isMobileOrTablet && isMenuOpen && (
                <ul className="flex flex-col list-none mt-5 w-full bg-[#202020] text-white border-t-2 border-[#71500b]">
                    <li 
                            onMouseEnter={() => setIsMobileSubmenuOpen(true)}
                            onMouseLeave={() => setIsMobileSubmenuOpen(false)}
                            className="py-2 px-5 border-b border-[#202020]"
                        >
                            <div className="flex justify-between items-center   ">
                                <Link href="/" className="">Σχετικά με Εμάς</Link>
                                <FontAwesomeIcon 
                                    icon={isMobileSubmenuOpen ? faMinus : faPlus} 
                                    className=" text-white group-hover:text-[#FF8210] transition-colors duration-200 ease-in-out"
                                    onClick={toggleMobileSubmenu}
                                />
                            </div>
                            {isMobileSubmenuOpen && (
                                <ul className="flex flex-col mt-4">
                                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/meet-the-team">Γνώρισε την Ομάδα μας</Link></li>
                                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/become-a-member">Γίνε μέλος</Link></li>
                                </ul>
                            )}
                        </li>
                            
                    {/*<li className="py-2 px-5 border-b border-[#202020]"><Link href="/" className="block">Σχετικά με Εμάς</Link></li>*/}
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/become-a-partner" className="block">Γίνε Συνεργάτης</Link></li>
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/uniai-network" className="block">UniAI.net</Link></li>
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/events" className="block">Οι Δράσεις μας</Link></li>
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/blog" className="block">Αρθογραφία</Link></li>
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="https://makeathon.uniai.gr/" className="block">Makeathon</Link></li>
                    <li className="py-2 px-5 border-b border-[#202020]"><Link href="/" className="block">
                        <FontAwesomeIcon icon={faGlobe} />
                    </Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
