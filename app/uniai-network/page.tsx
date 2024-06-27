import '@/styles/globals.css';
import Image from 'next/image';

const UniAINetwork = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full bg-gray-200 rounded-b-full  py-[4vh] mb-10 bg-gradient-to-l from-[#9202D8] via-100% to-[#FF7D07]">

      {/* Left Column (Image) */}
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        <Image src="/lol-removebg-preview.png" alt="Logo" width={250} height={200} className="max-w-full h-auto rounded-lg" />
      </div>

        {/* Right Column (Heading) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center">UniAI.net</h2>
        </div>

      </div>

      <div className="p-6 w-[70vw] mx-auto text-left ">
        <p className="mt-4 text-wrap text-[22px] text-left">Σκοπός της UniAI είναι η σύνδεση ανθρώπων και ιδεών για την προώθηση της καινοτομίας και τη βελτίωση της ανθρώπινης ζωής. Αυτό δεν μπορεί επιτευχθεί χωρίς τη συνεργασία με ανθρώπους και οργανισμούς που συμμερίζονται το όραμα μας. Εκείνοι είναι που αποτελούν το UniAI.net.</p>
      </div>

      <div className="mt-14">
      <h1 className="text-[56px] font-bold text-center">
        <span>Meet</span> <span>our</span> <span className="text-[#FF8210]">Contributors</span> <span>and</span> <span>our</span> <span className="text-[#FF8210]">Mentors</span>
      </h1>
      </div>

      {/* boxes here with contributors and mentors */}
      <div className="mt-10">

      </div>

      {/* box with companies here */}
      <div className="mt-10 mb-20">

      </div>


    </div>

  );
};

export default UniAINetwork;
