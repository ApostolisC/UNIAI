'use client';
// pages/BecomeMemberPage.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ExpandableDepartmentList from '@/src/components/ExpandableDepartmentList/ExpandableDepartmentList';
import { Team, teams } from '@/data/teams';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const BecomeMemberPage = () => {
    const [departments, setDepartments] = useState<Team[]>([]);
    const pathname = usePathname();
    const locale = pathname ? pathname.split('/')[1] : 'en';
    const t = useTranslations('BecomeMemberPage');

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
                        <h2 className="text-[40px] md:text-[45px] font-bold text-white mb-4">{t('titles.forMembers')}</h2>
                    </div>
                </div>
            </div>

            <div className="h-[40px] md:h-[70px]"></div>

            {/* Main content section */}
            <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
                <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
                    <p>
                        {t('intro.line1')} <span className="font-bold">{t('intro.you')}</span> {t('intro.line2')}
                    </p>
                    <br />
                    <p>{t('intro.line3')}</p>
                    <br />
                </div>
            </div>

            <div className="h-[40px] md:h-[70px]"></div>

            <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
                <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
                    <p>{t('qualities.intro')}</p>
                    <br />
                    <ul className="list-disc indent-4 ml-6 mb-6 text-gray-900 dark:text-gray-200">
                        <li>{t('qualities.list.item1')}</li>
                        <li>{t('qualities.list.item2')}</li>
                        <li>{t('qualities.list.item3')}</li>
                        <li>{t('qualities.list.item4')}</li>
                        <li>{t('qualities.list.item5')}</li>
                        <li>{t('qualities.list.item6')}</li>
                    </ul>
                    <p>{t('intro.departments')}</p>
                </div>
                <br />
            </div>

            {/* Departments List */}
            <ExpandableDepartmentList departments={departments} locale={locale as 'en' | 'el'} excludedDepartments={excludedDepartments} />

            <div className="text-center mb-[50px] md:mb-[100px]"></div>
        </div>
    );
};

export default BecomeMemberPage;
