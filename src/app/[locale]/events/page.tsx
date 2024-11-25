import '@/styles/globals.css';
import EventBox from '../../components/events/event';

const Events = () => {
  return (
    <div>
      <h2 className="text-[40px] md:text-[55px] font-bold text-white mb-4 text-center mt-16">
        UniAI Events
      </h2>

      <EventBox
        icon="/events/IMG_2504-1152x2048.jpg" 
        title="AI Open Seminar" 
        text="Topics: Computer Vision, Commands as AI Conversations" 
        date="19 January 2024"
        location="Athens University of Economics and Business"
        position="left"
      />

      <EventBox
        icon="/events/20231215_193022-1152x1536.jpg" 
        title="AI Open Seminar" 
        text="With 3 esteemed speakers from the field of AI Research, we held our first sold-out AI Open Seminar, gathering 60 participants from different universities" 
        date="15 December 2023"
        location="Athens University of Economics and Business"
        position="right"
      />

      <EventBox
        icon="/events/pint_of_ai_art-1362x2048.jpeg" 
        title="First Pint of AI​" 
        text="In a relaxed environment we got to learn and share with the world all about art and AI at our first Pint of AI: Art Edition"
        date="28 November 2023 "
        location="hiVerid Mind Art Exhibition"
        position="left"
      />

      <EventBox
        icon="/events/GroupPic-1536x1152.jpg" 
        title="Real time predictions using an AI chatbot {Workshop}​" 
        text="Our first external Workshop took place during the Second AI Forum"
        date="04 November 2023 "
        location="National Hellenic Research Foundation"
        position="right"
      />

      <EventBox
        icon="/events/Workshop-768x1317.jpeg" 
        title="How to hack an LLM? {Workshop}​" 
        text="First Internal Training on AI"
        date="18 October 2023 "
        location="ACEin "
        position="left"
      />

      <EventBox
        icon="/events/20230930_170151-1152x1536.jpg" 
        title="Winter Semester Kick-off" 
        text="The official start of UniAI’s first generation members: 30 students from 8 different universities came together to embark on a creative journey of education and innovation with AI." 
        date="30 September 2023"
        location="Myrtillo Café"
        position="right"
      />
    </div>
  );
};

export default Events;


