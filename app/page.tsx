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

      {/*  --tw-scale-x*/}

      <div className="grid grid-cols-3 ml-[10%] gap-0">
        {/* Box 1 */}
        <div className="relative overflow-hidden group mb-5 w-[20vw] ml-[8.5vw]">
          <img src="/innovation-2.png" alt="Image 2" className="w-[20vw] h-auto object-cover transition-transform duration-3000 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Innovation</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">Foster innovation driven members, supporting creativity, enable revolutionary solutions.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative overflow-hidden group mb-5">
          <img src="/integrity-2.png" alt="Image 2" className="w-[20vw] h-auto object-cover transition-transform duration-300 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Integrity</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">Commitment to honesty, transparency, and accountability in all activities & interactions. It means ensuring that UniAI’s mission and goals are pursued with sincerity and without compromise on ethical standards.</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative overflow-hidden group mb-5 -ml-[8.5vw]">
          <img src="/trust-2.png" alt="Image 3" className="w-[20vw] h-auto object-cover transition-transform duration-300 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Trust</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">All members are able to work well with everyone with solidarity and no stress by supporting open communication between teams. We want our organization to be a safe place for all members.</p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="relative overflow-hidden group ml-[8.5vw]">
          <img src="/empowerment-2.png" alt="Image 3" className="w-[20vw] h-auto object-cover transition-transform duration-300 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Empowerment</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">Empower students, ideas, initiatives, members, appreciating abilities & goals, helping students to feel confident on AI.</p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="relative overflow-hidden group">
          <img src="/sustainability-2.png" alt="Image 3" className="w-[20vw] h-auto object-cover transition-transform duration-300 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Sustainability</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">Responsible and balanced use of resources, considering the environmental, social and economic factors to create a more stable and equitable future.</p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="relative overflow-hidden group -ml-[8.5vw]">
          <img src="/inclusivity-2.png" alt="Image 3" className="w-[20vw] h-auto object-cover transition-transform duration-300 transform group-hover:scale-100" />
          <div style={{ transitionDuration: '500ms' }} className="w-[20vw] transition h-auto absolute inset-0 bg-black bg-opacity-70 content-center items-center justify-center opacity-0 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-quicksand leading-6 ml-5 mb-1">Inclusivity</h3>
            <p className="text-white font-quicksand text-base leading-6 ml-5">Fair treatment and respect for every person. At the same time we promote equality, justice, respect for every way of thinking and living, acceptance of the different and everyone&apos;s right to participate. As an organization we embrace diversity.</p>
          </div>
        </div>

    </div>

    <br />
    <br />



      </>

  );
};
