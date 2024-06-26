'use client'
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import AboutUsBox from '../components/AboutUs/box';
import ValuesBox from '../components/Values/box';

export default function Page() {
  const [title, content] = useState(false);
  return (
    <>
      <div className="hidden md:block relative aspect-[500/300] max-w-[90vw] max-h-[100vw] mx-auto">
        <Image 
          src="/wires.png" 
          alt="Background image" 
          layout="fill" 
          objectFit="contain" 
          className="object-cover" 
          style={{ filter: 'brightness(100%) opacity(0.65) hue-rotate(0deg)' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '50%', height: '50%' }}>
          <Image src="/logo2.png" alt="Logo" layout="fill" objectFit="contain" />
        </div>
      </div>

      {/* Logo Image - Shown on mobile screens */}
      <div className="md:hidden mx-auto max-w-[80vw]">
        <Image src="/logo2.png" alt="Logo" width={500} height={300} />
      </div>

      <div className="mt-8">
            <h1 className="font-quicksand text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">About Us</h1>

            <AboutUsBox 
                image="/ALL-WHITE-LOGO-ICON.png" 
                bgcolor="#FF8210" 
                title="Who we are" 
                content="UniAI is a student initiative on artificial intelligence in Greece which aims to create a community that promotes education and innovation on AI. Our mission is to connect students, organizations, companies and AI enthusiasts through a variety of events and projects that enable the exchange of ideas and information around AI." 
            />

            <AboutUsBox 
                image="/vision-white.png" 
                bgcolor="#A754C8" 
                title="Vision" 
                content="Connecting people and ideas to promote innovation and education with Artificial Intelligence." 
            />

            <AboutUsBox 
                image="/summit.255x256-white.png" 
                bgcolor="#FF8210" 
                title="Mission" 
                content="To create a student organization that promotes and enhances a culture of AI engagement and a strong network for the educational and innovative ecosystem." 
            />

            <div className="mt-16">
                <h1 className="font-quicksand text-4xl font-bold text-center mb-10">Values</h1>
            </div>
        </div>

      {/*  --tw-scale-x*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 max-w-screen-lg mx-auto">
          <ValuesBox 
              image="/innovation-2.png" 
              title="Innovation" 
              content="Foster innovation driven members, supporting creativity, enable revolutionary solutions." 
          />
          <ValuesBox 
              image="/integrity-2.png" 
              title="Integrity" 
              content="Commitment to honesty, transparency, and accountability in all activities & interactions. It means ensuring that UniAI’s mission and goals are pursued with sincerity and without compromise on ethical standards." 
          />
          <ValuesBox 
              image="/trust-2.png" 
              title="Trust" 
              content="All members are able to work well with everyone with solidarity and no stress by supporting open communication between teams. We want our organization to be a safe place for all members." 
          />
          <ValuesBox 
              image="/empowerment-2.png" 
              title="Empowerment" 
              content="Empower students, ideas, initiatives, members, appreciating abilities & goals, helping students to feel confident on AI." 
          />
          <ValuesBox 
              image="/sustainability-2.png" 
              title="Sustainability" 
              content="Responsible and balanced use of resources, considering the environmental, social and economic factors to create a more stable and equitable future." 
          />
          <ValuesBox 
              image="/inclusivity-2.png" 
              title="Inclusivity" 
              content="Fair treatment and respect for every person. At the same time we promote equality, justice, respect for every way of thinking and living, acceptance of the different and everyone&apos;s right to participate. As an organization we embrace diversity." 
          />
      </div>



    <br />
    <br />



      </>

  );
};
