'use client';
// pages/BecomeMemberPage.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ExpandableDepartmentList from '../../components/ExpandableDepartmentList/ExpandableDepartmentList';
import { Team, teams } from '@/data/teams';

const BecomeMemberPage = () => {
    const [departments, setDepartments] = useState<Team[]>([]);

    useEffect(() => {
        // Simulate data fetching
        setDepartments(teams);
    }, []);

    // Example excluded departments
    const excludedDepartments = ['Electrical Engineering']; // Replace with departments you want to exclude

    return (
        <div>
            {/* Header section */}
            <div className="bg-gradient-to-l from-[#9202D8] to-[#FF7D07] grid rounded-custom2 p-4">
                <div className="flex flex-col md:flex-row">
                    {/* Left div: Icon (hidden on mobile) */}
                    <div className="hidden md:flex md:w-1/2 justify-center ml-44">
                        <Image src="/community.png" alt="Community Icon" width={256} height={256} />
                    </div>
                    {/* Right div: Title */}
                    <div className="flex md:w-1/2 justify-center items-center mt-10 mr-10">
                        <h2 className="text-[40px] md:text-[45px] font-bold text-white mb-4">For Members</h2>
                    </div>
                </div>
            </div>

            <div className="h-[40px] md:h-[70px]"></div>

            {/* Main content section */}
            <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
                <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
                    <p>
                        We are ambitious AI lovers who aim to become part of the AI ecosystem and <span className="font-bold">YOU</span> can become a part of the journey! We are welcoming students from all backgrounds who are passionate about AI and want to learn, share, and co-operate.
                    </p>
                    <br />
                    <p>Our long-term vision and mission are the main ingredients that push us towards our goals without losing our way.</p>
                    <br />
                </div>
            </div>

            <div className="h-[40px] md:h-[70px]"></div>

            <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
                <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
                    <p>If you combine the following qualities, you are the one we are looking for!</p>
                    <br />
                    <ul className="list-disc indent-4 ml-6 mb-6 text-gray-900 dark:text-gray-200">
                        <li>Passion for Artificial Intelligence</li>
                        <li>Team spirit</li>
                        <li>Ready to dedicate at least 6 hours weekly for the initiative</li>
                        <li>Committed and motivated to promote our initiative</li>
                        <li>Μotivated to bring change in Greece</li>
                        <li>Open communication and collaboration</li>
                    </ul>
                    <p>Our organisation is divided into different departments based on responsibilities, as outlined below. In all departments, the creativity of our members is strongly promoted and encouraged by enthusiastically supporting new initiatives and ideas! Specifically, the departments and their (indicative) responsibilities are:</p>
                </div>
                <br />
            </div>

            {/* Departments List */}
            <ExpandableDepartmentList departments={departments} excludedDepartments={excludedDepartments} />

            <div className="text-center mb-[50px] md:mb-[100px]"></div>
        </div>
    );
};

export default BecomeMemberPage;
