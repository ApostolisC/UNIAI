'use client'

import React from 'react';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import DynamicButton from '@/components/buttons/DynamicButton';

const BecomePartnerPage = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#9b51e0' }} className="rounded-custom p-[17vh]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left div: Title and Button */}


          <div className="md:w-1/2 mb-8 ml-[15vw] md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4 break-keep">
              For Partners
            </h2>
            <br />

            <DynamicButton 
              borderColor="#fff" 
              textColor="#fff" 
              backgroundColor="#9b51e0" 
              hoverColor="#FF8210"
            >
              Become a Partner
            </DynamicButton>


          </div>

          {/* Right div: Icon */}
          <div className="md:w-1/2 flex justify-center mr-[15vw]">
            <FontAwesomeIcon 
              icon={faHandshake} 
              className="text-white text-8xl" 
            />
          </div>
        </div>
      </div>

      <div className="h-[70px]"></div>


      <div className="container mx-auto px-4 border-l-2 ml-[16vw] w-[70vw] m-2">
        <div className="text-lg text-gray-900 dark:text-gray-200 leading-relaxed">
          <p>
            Ο μη κερδοσκοπικός οργανισμός μας UniAI φιλοδοξεί να αναλάβει μια πληθώρα δράσεων, οι οποίες δίνουν την δυνατότητα για διαφορετικού τύπου συνεργασίες με διάφορους φορείς. 
            <strong className="font-bold"> Μπορείτε να συμβάλλετε στο εγχείρημά μας και στην πραγματοποίηση του οράματός μας με πολλούς τρόπους</strong>, ως:
          </p>
          <br />
          <ul className="list-disc ml-6 mb-6 text-gray-900 dark:text-gray-200">
            <li>Δημιουργός προκλήσεων για το Makeathon (διαγωνισμός καινοτομίας με χρήση ΑΙ)</li>
            <li>Συμμετέχουσα/ων ή ομιλητής/τρια στις εκδηλώσεις μας</li>
            <li>Χορηγός με αναγνώριση λογότυπου</li>
            <li>Μέντορας για τα μέλη μας</li>
            <li>Workshops στα γραφεία σας</li>
            <li>Δημοσίευση ανοιχτών θέσεων ή μεταπτυχιακής διατριβής μέσα από το δίκτυο μας</li>
          </ul>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            Θα χαρούμε πολύ να συζητήσουμε μαζί σας για μια μακροπρόθεσμη συνεργασία!
          </p>

          <br />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold p-[80px]">Benefits</h3>
      </div>

    </div>
  );
};

export default BecomePartnerPage;
