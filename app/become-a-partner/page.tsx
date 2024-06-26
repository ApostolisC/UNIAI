'use client'

import React from 'react';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import DynamicButton from '@/components/buttons/DynamicButton';
import BenefitBox from '../../components/Benefits/box';

const BecomePartnerPage = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#A754C8' }} className="rounded-custom p-[13vh]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left div: Title and Button */}


          <div className="md:w-1/2 mb-8 ml-[8vw] md:mb-0 text-center md:text-left">
            <h2 className="text-[45px] font-bold text-white mb-4 break-keep">
              For Partners
            </h2>
            <br />

            <DynamicButton 
              borderColor="#fff" 
              textColor="#fff" 
              backgroundColor="#A754C8" 
              hoverColor="#FF8210"
            >
              Become a Partner
            </DynamicButton>


          </div>

          {/* Right div: Icon */}
          <div className="md:w-1/2 flex justify-center mr-[8vw]">
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

      <div className="text-center mt-[80px]">
        <h3 className="text-5xl font-bold">Benefits</h3>
      </div>

      <BenefitBox 
        icon="/megaphone-white-1.png" 
        title="MARKETING & AWARENESS" 
        text="Ως υποστηρικτής του UniAI, θα συμπεριληφθείτε στην ιστοσελίδα μας και επιπλέον θα διαφημίσουμε την εταιρεία σας στις καμπάνιες μας. Έτσι, έχετε την δυνατότητα να ενισχύσετε την παρουσία της εταιρείας σας ανάμεσα στους φοιτητές του λεκανοπεδίου και πέρα από αυτό." 
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/network-white-1.png" 
        title="NETWORK & ECOSYSTEM" 
        text="Όραμά μας είναι να συντελέσουμε στην διαμόρφωση της κουλτούρας του ΑΙ στην Ελλάδα. Θέλουμε να ενισχύσουμε τον διάλογο, την παιδεία και την ανταλλαγή ιδεών γύρω από το AI, δημιουργώντας ένα ευφυές περιβάλλον όπου η καινοτομία μαζί με τη μάθηση είναι η πηγή της πρόοδού και η τεχνητή νοημοσύνη διαδραματίζει καθοριστικό ρόλο στην επίλυση πραγματικών προβλημάτων." 
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <BenefitBox 
        icon="/collaboration-white-1.png" 
        smallerIconSource='/collaboration-white-1.png' // used to use smaller size for the icon 
        title="PROJECT COLLABORATIONS" 
        text="Η συνεργασία μαζί μας ανοίγει τον δρόμο για πολλούς τύπους αλληλεπίδρασης, όπως η δυνατότητα να γίνετε δημιουργός προκλήσεων για τα Makeathons μας, να συμμετέχετε σε σεμινάρια και ημερίδες ή να φιλοξενήσετε εργαστήρια δικτύωσης με τα μέλη μας. Είμαστε ανοιχτοί σε κάθε είδους πρόταση συνεργασίας και περιμένουμε να ακούσουμε τις δημιουργικές σας ιδέες!" 
        position="left"
        backgroundColor="bg-[#FF8210]"
      />

      <BenefitBox 
        icon="/talent-pool-white-1.png" 
        title="STUDENT TALENT POOL" 
        text="Αποκτήστε πρόσβαση στο δίκτυο των μελών μας που αποτελείται από κινητοποιημένους φοιτητές διαφορετικών ειδικεύσεων, οι οποίοι όμως όλοι μοιράζονται κατανόηση των νέων τεχνολογιών και πάθος για την καινοτομία και τον πειραματισμό με αυτές." 
        position="right"
        backgroundColor="bg-[#A754C8]"
      />

      <div className="text-center mb-[100px]">
      </div>

    </div>
  );
};

export default BecomePartnerPage;
