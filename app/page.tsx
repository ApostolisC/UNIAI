'use client'
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import styles from '../styles/page.module.css';
import AboutUsBox from '../components/AboutUs/box';
import ValuesBox from '../components/Values/box';

export default function Page() {
  const [title, content] = useState(false);
  return (

    <><div className="relative">
      <div className="min-h-screen">
        <Image className={styles.image1} src="/wires.png" alt="Background Image" layout="fill" objectFit="none" />
        <Image className={styles.image2} src="/logo2.png" alt="Overlay Image" layout="fill" objectFit="none" />
        <button className={styles.become_a_partner_button}>Become a Partner</button>
      </div>
      </div>

      <div className="mt-[25px]">
        <h1 className="font-quicksand text-6xl font-bold text-center mb-10">About Us</h1>

        <AboutUsBox image="/ALL-WHITE-LOGO-ICON.png" bgcolor="#FF8210" title="Who we are" content="UniAI is a student initiative on artificial intelligence in Greece which aims to create a community that promotes education and innovation on AI. Our mission is to connect students, organizations, companies and AI enthusiasts through a variety of events and projects that enable the exchange of ideas and information around AI." />

        <AboutUsBox image="/vision-white.png" bgcolor="#A754C8" title="Vision" content="Connecting people and ideas to promote innovation and education with Artificial Intelligence." />

        <AboutUsBox image="/summit.255x256-white.png" bgcolor="#FF8210" title="Mission" content="To create a student organization that promotes and enhances a culture of AI engagement and a strong network for the educational and innovative ecosystem." />

        <br />
        <br />

      </div>

      <div>
        <h1 className="font-quicksand text-4xl font-bold text-center mb-10">Values</h1>
      </div>

      {/*  --tw-scale-x*/}

      <div className="grid grid-cols-3 ml-[10%] gap-0">

        <ValuesBox image="/innovation-2.png" title="Innovation" content="Foster innovation driven members, supporting creativity, enable revolutionary solutions." extraStyle="w-[20vw] ml-[8.5vw]"/>

        <ValuesBox image="/integrity-2.png" title="Integrity" content="Commitment to honesty, transparency, and accountability in all activities & interactions. It means ensuring that UniAI’s mission and goals are pursued with sincerity and without compromise on ethical standards." extraStyle=""/>

        <ValuesBox image="/trust-2.png" title="Trust" content="All members are able to work well with everyone with solidarity and no stress by supporting open communication between teams. We want our organization to be a safe place for all members." extraStyle="-ml-[8.5vw]"/>

        <ValuesBox image="/empowerment-2.png" title="Empowerment" content="Empower students, ideas, initiatives, members, appreciating abilities & goals, helping students to feel confident on AI." extraStyle="ml-[8.5vw]"/>

        <ValuesBox image="/sustainability-2.png" title="Sustainability" content="Responsible and balanced use of resources, considering the environmental, social and economic factors to create a more stable and equitable future." extraStyle=""/>

        <ValuesBox image="/inclusivity-2.png" title="Inclusivity" content="Fair treatment and respect for every person. At the same time we promote equality, justice, respect for every way of thinking and living, acceptance of the different and everyone&apos;s right to participate. As an organization we embrace diversity." extraStyle="-ml-[8.5vw]" />

    </div>

    <br />
    <br />



      </>

  );
};
