'use client'

import '@/styles/globals.css';
import Image from 'next/image';
import AboutUsBox from '@/src/components/AboutUs/box';
import ValuesBox from '@/src/components/Values/box';
import DynamicButton from '@/src/components/buttons/DynamicButton';


import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/routing';


interface PageProps {
  params: {
    lng: string;
  };
}

export default function HomePage() {
  
  
  const t = useTranslations('HomePage');
  const t2 = useTranslations('Components');
  
  
  return (
    (
      <>
        {/* Desktop and large screen layout */}
        <div className="hidden md:block relative aspect-[500/300] max-w-[90vw] max-h-[100vw] mx-auto">
          {/* Background Image */}
          <div className="absolute inset-0 mt-2">
            <Image
              src="/wires.png"
              alt="Background image"
              fill
              className="object-contain" // Changed from object-cover to object-contain
              style={{
                filter: 'brightness(100%) opacity(0.65) hue-rotate(0deg)',
              }}
            />
          </div>
  
          {/* Logo and Button Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Logo Image */}
            <div className="relative w-[45vw] h-[45vh]">
              <Image
                src="/logo2.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
  
            <div className="flex flex-col">
              <Link href="/become-a-partner">
                <DynamicButton
                borderColor="#fff"
                textColor="#fff"
                backgroundColor="#FF8210"
                hoverColor="#D56500"
                >
                  {t("buttons.become-a-partner")}
                </DynamicButton>
              </Link>
            </div>
          </div>
        </div>
  
        {/* Mobile layout */}
        <div className="md:hidden mx-auto max-w-[95vw] flex flex-col items-center">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={500}
            height={300}
            className="mt-36 mb-16"
          />
          <div className="flex flex-col items-center justify-center space-y-4 mx-auto max-w-[80vw]">

            <Link href="/become-a-partner">

              <DynamicButton
                borderColor="#fff"
                textColor="#fff"
                backgroundColor="#FF8210"
                hoverColor="#D56500"
              >
                {t('buttons.become-a-partner')}
              </DynamicButton>
            </Link>
  
          </div>
          <div className="bg-[#3A1D45] h-[3px] w-[100vw] mt-36"></div>
        </div>
  
        {/* About Us Section */}
        <div className="mt-8">
          <h1 className="font-quicksand text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">
            {t('titles.about-us')}
          </h1>
  
          <AboutUsBox
            image="/ALL-WHITE-LOGO-ICON.png"
            bgcolor="#FF8210"
            title={t2('about-us.who-we-are.title')}
            content={t2('about-us.who-we-are.content')}
          />
  
          <AboutUsBox
            image="/vision-white.png"
            bgcolor="#A754C8"
            title={t2('about-us.vision.title')}
            content={t2('about-us.vision.content')}
          />
  
          <AboutUsBox
            image="/summit.255x256-white.png"
            bgcolor="#FF8210"
            title={t2('about-us.mission.title')}
            content={t2('about-us.mission.content')}
          />
  
          <div className="mt-20">
            <h1 className="font-quicksand text-4xl font-bold text-center mb-10">
              {t('titles.our-values')}
            </h1>
          </div>
        </div>
  
        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg mx-auto">
          <ValuesBox
            image="/innovation-2.png"
            title={t2('our-values.innovation.title')}
            content={t2('our-values.innovation.content')}
          />
          <ValuesBox
            image="/integrity-2.png"
            title={t2('our-values.integrity.title')}
            content={t2('our-values.integrity.content')}
          />
          <ValuesBox
            image="/trust-2.png"
            title={t2('our-values.trust.title')}
            content={t2('our-values.trust.content')}
          />
          <ValuesBox
            image="/empowerment-2.png"
            title={t2('our-values.empowerment.title')}
            content={t2('our-values.empowerment.content')}
          />
          <ValuesBox
            image="/sustainability-2.png"
            title={t2('our-values.sustainability.title')}
            content={t2('our-values.sustainability.content')}
          />
          <ValuesBox
            image="/inclusivity-2.png"
            title={t2('our-values.inclusivity.title')}
            content={t2('our-values.inclusivity.content')}
          />
        </div>
        <div className="h-[100px]"></div>
      </>

    )
  );
}



