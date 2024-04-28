'use client'
import React, { useEffect } from 'react';
import '../styles/globals.css';
import Image from 'next/image';
import styles from '../styles/page.module.css';


export default function Page() {
  
  return (

    <><div className="relative">
      <div className="min-h-screen">
        <Image className={styles.image1} src="/wires.png" alt="Background Image" layout="fill" objectFit="none" />
        <Image className={styles.image2} src="/logo2.png" alt="Overlay Image" layout="fill" objectFit="none" />
        <button className={styles.become_a_partner_button}>Become a Partner</button>
      </div>
      </div>

      <div className={styles.about_us}>
        <h1 className="font-quicksand text-6xl font-bold text-center mb-10">About Us</h1>

        <div className="flex relative mt-[10px] ml-auto mr-auto w-[60vw] bg-[#FF8210] p-8 text-xl leading-7 rounded-3xl">
          <div className={styles.container_logo}>
            <Image src="/ALL-WHITE-LOGO-ICON.png" alt="Uniai logo" width="300" height="300"></Image>
          </div>
          <div className="self-center ml-[50px] text-xl">
            <p>UniAI is a student initiative on artificial intelligence in Greece which aims to create a community that promotes education and innovation on AI. Our mission is to connect students, organizations, companies and AI enthusiasts through a variety of events and projects that enable the exchange of ideas and information around AI. </p>
          </div>
        </div>

        <div className="flex relative mt-[50px] ml-auto mr-auto w-[60vw] bg-[#A754C8] p-8 text-xl leading-7 rounded-3xl">
          <div className={styles.container_logo}>
            <Image src="/vision-white.png" alt="Uniai logo" width="100" height="100"></Image>
          </div>
          <div className="self-center ml-[50px] text-xl">
            <h4 className="text-2xl">Vision</h4>
            <br />
            <p>Connecting people and ideas to promote innovation and education with Artificial Intelligence. </p>
          </div>
        </div>

        <div className="flex relative mt-[50px] ml-auto mr-auto w-[60vw] bg-[#FF8210] p-8 text-xl leading-7 rounded-3xl">
          <div className={styles.container_logo}>
            <Image src="/summit.255x256-white.png" alt="Uniai logo" width="150" height="150"></Image>
          </div>
          <div className="self-center ml-[50px] text-xl">
            <h4 className="text-2xl">Mission</h4>
            <br />
            <p>To create a student organization that promotes and enhances a culture of AI engagement and a strong network for the educational and innovative ecosystem. </p>
          </div>
        </div>

        <br />
        <br />

        <div></div>
      </div>

      <div>
        <h1 className="font-quicksand text-4xl font-bold text-center mb-10">Values</h1>
      </div>


      </>

  );
};
