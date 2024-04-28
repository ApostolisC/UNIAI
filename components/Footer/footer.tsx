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
                <Image src="/logo3.png" alt="Logo" width={100} height={100} />
                </div>
                <header className={styles.followUs}>Follow Us On:</header>
                <div className="flex gap-4">
                <Link href="http://www.instagram.com/uniai.gr/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="https://www.linkedin.com/company/uniai/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href="http://www.tiktok.com/@uniai.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faTiktok} /></Link>
                <Link href="https://www.facebook.com/uniAI.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faFacebook} /></Link>
                </div>
            </div>

            {/* Right side */}
            <div className={`${styles.footerRight} flex flex-col gap-4`}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={styles.footerInput}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={styles.footerInput}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.footerInput}
                />
                <div className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    id="gdprAgreement"
                    name="gdprAgreement"
                    checked={formData.gdprAgreement}
                    onChange={handleChange}
                    className={styles.gdprCheckbox}
                    />
                    <label htmlFor="gdprAgreement">I agree to the GDPR Agreement</label>
                </div>
                <button type="submit" className={styles.submitButton}>
                    Subscribe
                </button>
                </form>
            </div>
            </div>

        </>
    );
};

export default Footer;
