'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gdprAgreement: false,
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        // Implement your form submission logic here
        // You can use a library like Axios or fetch API to send data to your server

        console.log('Form Submitted:', formData);

        // Reset form after submission (optional)
        setFormData({ firstName: '', lastName: '', email: '', gdprAgreement: false });
    };
    return (
        <>
        <div className="flex justify-between items-start gap-8">
            {/* Left side */}
            <div className={`${styles.footerLeft} flex flex-col items-center gap-4`}>
                <div className={styles.footerLogo}>
                    <Image src="/logo3.png" alt="Logo" layout='fill' objectFit='contain'/>
                </div>
                <h2 className={styles.followUs}>Follow Us On:</h2>
                <div className="flex gap-6 mr-5">
                <Link href="http://www.instagram.com/uniai.gr/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="https://www.linkedin.com/company/uniai/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href="http://www.tiktok.com/@uniai.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faTiktok} /></Link>
                <Link href="https://www.facebook.com/uniAI.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faFacebook} /></Link>
                </div>
            </div>

            {/* Right side */}
            <div className={`${styles.footerRight} flex flex-col gap-4`}>
                <h3 className={styles.formTitle}>UniAI&apos;s Newsletter</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-xl">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={styles.footerInput}
                    />
                    <label htmlFor="lastName" className="text-xl">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={styles.footerInput}
                    />
                    <label htmlFor="email" className="text-xl">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.footerInput}
                    />
                    <label className="text-xl">GDPR Aggrement</label>
                    <div className="flex items-center gap-2 mb-2 text-sm">
                        <input
                        type="checkbox"
                        id="gdprAgreement"
                        name="gdprAgreement"
                        checked={formData.gdprAgreement}
                        onChange={handleChange}
                        required
                        className={styles.gdprCheckbox}
                        />
                        <label htmlFor="gdprAgreement">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
            </div>

            <br />
            <br />

            <hr />

            <div className="flex justify-center items-center mt-5">
                <Link href="#" className="mr-4 px-4 py-2 text-center text-white hover:text-[#A754C8] rounded text-[17px] font-bold">About us</Link>
                <Link href="#" className="mr-4 px-4 py-2 text-center text-white hover:text-[#A754C8] rounded text-[17px] font-bold">Become a Member</Link>
                <Link href="#" className="px-4 py-2 text-center text-white hover:text-[#A754C8] rounded text-[17px] font-bold">Become a Partner</Link>
            </div>

            <br />

            <div className="flex justify-center items-center">
                <p>Copyright © 2023. All rights reserved. Made with {"<"}3 by Team UniAI.</p>
            </div>

        </>
    );
};

export default Footer;
