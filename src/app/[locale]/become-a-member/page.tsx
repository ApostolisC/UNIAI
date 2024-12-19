'use client';

import React from 'react';
import Image from 'next/image';
import ExpandableDepartmentList from '@/src/components/ExpandableDepartmentList/ExpandableDepartmentList';
import { teams } from '@/data/teams';
import { useTranslations } from 'next-intl';

const BecomeMemberPage = () => {
  const t = useTranslations('BecomeMemberPage');
  const t2 = useTranslations('Components');

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-l from-[#9202D8] to-[#FF7D07] grid rounded-custom2 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex md:w-1/2 justify-center ml-44">
            <Image src="/community.png" alt="Community Icon" width={256} height={256} />
          </div>
          <div className="flex md:w-1/2 justify-center items-center mt-10 mr-10">
            <h2 className="text-[40px] md:text-[45px] font-bold text-white mb-4">{t('titles.forMembers')}</h2>
          </div>
        </div>
      </div>

      <div className="h-[40px] md:h-[70px]"></div>

      {/* Introduction */}
      <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
        <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
          <p>
            {t('intro.line1')} <span className="font-bold">{t('intro.you')}</span> {t('intro.line2')}
          </p>
          <br />
          <p>{t('intro.line3')}</p>
        </div>
      </div>

      <div className="h-[40px] md:h-[70px]"></div>

      {/* Qualities */}
      <div className="container mx-auto px-4 border-l-[1.5px] md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2 pt-2">
        <div className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
          <p>{t2('qualities.intro')}</p>
          <br />
          <ul className="list-disc indent-4 ml-6 mb-6 text-gray-900 dark:text-gray-200">
            {[...Array(6)].map((_, index) => (
              <li key={index}>{t2(`qualities.list.item${index + 1}`)}</li>
            ))}
          </ul>
          <p>{t('intro.departments')}</p>
        </div>
      </div>

      {/* Expandable Department List */}
      <ExpandableDepartmentList departments={teams} />

      <div className="text-center mb-[50px] md:mb-[100px]"></div>
    </div>
  );
};

export default BecomeMemberPage;
