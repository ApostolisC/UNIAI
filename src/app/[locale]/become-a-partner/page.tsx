'use client'

import React from 'react';
import '@/styles/globals.css';
import DynamicButton from '@/src/components/buttons/DynamicButton';
import BenefitBox from '@/src/components/Benefits/box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake  } from '@fortawesome/free-solid-svg-icons';

import { useTranslations } from 'next-intl'; 

const BecomePartnerPage = () => {
  const t = useTranslations('BecomePartnerPage');

  return (

    <div>
      {/* Purple background section */}
      <div style={{ backgroundColor: '#A754C8' }} className="rounded-custom p-4 md:p-[13vh] py-[6vh] md:py-[13vh]">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left div: Title and Button */}
          <div className="md:w-1/2 mb-8 md:ml-[8vw] md:mb-0 text-left px-4 md:px-0">
            <h2 className="text-[40px] md:text-[45px] font-bold text-white mb-4">
              {t('title')}
            </h2>
            <DynamicButton 
              borderColor="#fff" 
              textColor="#fff" 
              backgroundColor="#A754C8" 
              hoverColor="#FF8210"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTVgzbzYjP5UTHzWZ4P4u0ujybga1Oa226SrlgT3xzT4WIig/viewform', "_blank")}
            >
              Become a Partner
            </DynamicButton>
          </div>

          {/* Right div: Icon (hidden on mobile) */}
          <div className="hidden md:flex md:w-1/2 justify-center mr-[8vw]">
            <FontAwesomeIcon 
              icon={faHandshake} 
              className="text-white text-8xl" 
            />
          </div>
        </div>
      </div>

      <div className="h-[40px] md:h-[70px]"></div>

      {/* Main content section */}
      <div className="container mx-auto px-4 border-l-2 md:ml-[16vw] ml-4 md:w-[70vw] w-[90%] my-2">
        <div className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed">
          <p>
            {t('paragraphs.par1')}
          </p>
          <br />
          <ul className="list-disc ml-6 mb-6 text-gray-900 dark:text-gray-200">
            <li>{t('bullets.b1')}</li>
            <li>{t('bullets.b2')}</li>
            <li>{t('bullets.b3')}</li>
            <li>{t('bullets.b4')}</li>
            <li>{t('bullets.b5')}</li>
            <li>{t('bullets.b6')}</li>
          </ul>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            {t('paragraphs.par2')}
          </p>
        </div>
      </div>

      <div className="text-center mt-[80px] md:mt-[80px]">
        <h3 className="text-4xl md:text-5xl font-bold">{t('box.title')}</h3>

      </div>

      {/* Benefit Boxes */}
      <BenefitBox 
        icon="/megaphone-white-1.png" 
        title="MARKETING & AWARENESS" 
        text={t('box.description1')} 
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/network-white-1.png" 
        title="NETWORK & ECOSYSTEM" 
        text={t('box.description2')}
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <BenefitBox 
        icon="/collaboration-white-1.png" 
        smallerIconSource='/collaboration-white-1.png' // used to use smaller size for the icon 
        title="PROJECT COLLABORATIONS" 
        text={t('box.description3')}
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/talent-pool-white-1.png" 
        title="STUDENT TALENT POOL" 
        text={t('box.description4')} 
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <div className="text-center mb-[50px] md:mb-[100px]"></div>
    </div>
  );
};

export default BecomePartnerPage;
