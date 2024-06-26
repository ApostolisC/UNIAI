'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // Define initial state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gdprAgreement: false,
    });

    // Handle form input change
    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Handle form submission
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        // Implement your form submission logic here
        console.log('Form Submitted:', formData);

        // Reset form after submission (optional)
        setFormData({ firstName: '', lastName: '', email: '', gdprAgreement: false });
    };

    // Use useEffect to prevent SSR hydration mismatches
    useEffect(() => {
        // Check if running on the client side
        const isClient = typeof window !== 'undefined';

        if (isClient) {
            // Additional client-side initialization logic if needed
        }
    }, []);

    return (
        <>
            <div className="flex justify-between items-start gap-8">
                {/* Left side */}
                <div className="flex flex-col items-center gap-4 ml-8">
                    <div className="relative w-36 h-10">
                        <Image src="/logo3.png" alt="Logo" layout="fill" objectFit="contain" />
                    </div>
                    <h2 className="text-white text-2xl font-semibold">Follow Us On:</h2>
                    <div className="flex gap-6 mr-5">
                        <Link href="http://www.instagram.com/uniai.gr/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link href="https://www.linkedin.com/company/uniai/" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link href="http://www.tiktok.com/@uniai.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faTiktok} /></Link>
                        <Link href="https://www.facebook.com/uniAI.gr" className="text-xl text-white hover:text-gray-300"><FontAwesomeIcon icon={faFacebook} /></Link>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-3xl font-semibold">UniAI&apos;s Newsletter</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-white text-xl">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-black placeholder-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="lastName" className="text-white text-xl">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-black placeholder-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="email" className="text-white text-xl">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 text-black placeholder-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="gdprAgreement"
                                name="gdprAgreement"
                                checked={formData.gdprAgreement}
                                onChange={handleChange}
                                required
                                className="h-4 w-4  text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="gdprAgreement" className="ml-2 block text-sm text-white">
                                I consent to having this website store my submitted information so they can respond to my inquiry.
                            </label>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="flex justify-center items-center mt-5">
                <Link href="#" className="mr-4 px-4 py-2 text-white hover:text-purple-500 rounded text-lg font-semibold">About Us</Link>
                <Link href="#" className="mr-4 px-4 py-2 text-white hover:text-purple-500 rounded text-lg font-semibold">Become a Member</Link>
                <Link href="#" className="px-4 py-2 text-white hover:text-purple-500 rounded text-lg font-semibold">Become a Partner</Link>
            </div>

            <div className="flex justify-center items-center mt-2 mb-8">
                <p className="text-white text-sm">Copyright © 2023. All rights reserved. Made with &lt;3 by Team UniAI.</p>
            </div>
        </>
    );
};

export default Footer;
