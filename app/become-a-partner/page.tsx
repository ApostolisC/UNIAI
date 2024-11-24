'use client'

import React from 'react';
import '../../styles/globals.css';
import DynamicButton from '@/components/buttons/DynamicButton';
import BenefitBox from '../../components/Benefits/box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake  } from '@fortawesome/free-solid-svg-icons';

const BecomePartnerPage = () => {
  return (
    <div>
      {/* Purple background section */}
      <div style={{ backgroundColor: '#A754C8' }} className="rounded-custom p-4 md:p-[13vh] py-[6vh] md:py-[13vh]">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left div: Title and Button */}
          <div className="md:w-1/2 mb-8 md:ml-[8vw] md:mb-0 text-left px-4 md:px-0">
            <h2 className="text-[40px] md:text-[45px] font-bold text-white mb-4">
              For Partners
            </h2>
            <DynamicButton 
              borderColor="#fff" 
              textColor="#fff" 
              backgroundColor="#A754C8" 
              hoverColor="#FF8210"
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
          Our non-profit organisation, UniAI, aspires to undertake a multitude of actions that provide the opportunity for different types of collaborations with various entities. 
            <strong className="font-bold"> You can contribute to our initiative and the realisation of our vision in many ways:</strong>, such as:
          </p>
          <br />
          <ul className="list-disc ml-6 mb-6 text-gray-900 dark:text-gray-200">
            <li>Challenge creator for the Makeathon (an innovation competition using AI)</li>
            <li>Participant or Speaker at our events</li>
            <li>Sponsor with logo recognition</li>
            <li>Mentor for our members</li>
            <li>Workshops at your offices</li>
            <li>Publication open jobs or master’s thesis through our network</li>
          </ul>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            We would be delighted to discuss a long-term collaboration with you!
          </p>
        </div>
      </div>

      <div className="text-center mt-[80px] md:mt-[80px]">
        <h3 className="text-4xl md:text-5xl font-bold">Benefits</h3>

      </div>

      {/* Benefit Boxes */}
      <BenefitBox 
        icon="/megaphone-white-1.png" 
        title="MARKETING & AWARENESS" 
        text="As a supporter of UniAI, you will be featured on our website and we will also promote your company in our campaigns. This way, you have the possibility to enhance your company’s presence among the students in the basin and beyond." 
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/network-white-1.png" 
        title="NETWORK & ECOSYSTEM" 
        text="UniAI serves as a meeting point for students, researchers, companies, and startups who share a common passion and interest in artificial intelligence. By becoming a member of this community, you gain the ability to interact and interface with our network." 
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <BenefitBox 
        icon="/collaboration-white-1.png" 
        smallerIconSource='/collaboration-white-1.png' // used to use smaller size for the icon 
        title="PROJECT COLLABORATIONS" 
        text="Collaborating with us opens the door to various types of interaction, such as the possibility of creating challenges for our Makeathons, participating in seminars and conferences, or hosting networking workshops with our members. We are open to all kinds of collaboration proposals and look forward to hearing your creative ideas!" 
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/talent-pool-white-1.png" 
        title="STUDENT TALENT POOL" 
        text="Access our member network of motivated students from diverse backgrounds, all of whom share an understanding of new technologies and a passion for innovation and experimentation with them" 
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <div className="text-center mb-[50px] md:mb-[100px]"></div>
    </div>
  );
};

export default BecomePartnerPage;
