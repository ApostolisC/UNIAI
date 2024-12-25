import '@/styles/globals.css';
import EventBox, { EventProps } from '@/src/components/events/event';
import { useTranslations } from 'next-intl';

const Events = () => {
  const t = useTranslations('Components');
  const t2 = useTranslations('EventsPage');
  const events = t.raw('events');

  const icons = [
    '/events/IMG_2504-1152x2048.jpg',
    '/events/20231215_193022-1152x1536.jpg',
    '/events/pint_of_ai_art-1362x2048.jpeg',
    '/events/GroupPic-1536x1152.jpg',
    '/events/Workshop-768x1317.jpeg',
    '/events/20230930_170151-1152x1536.jpg'
  ];

  return (
    <div>
      <h2 className="text-[40px] md:text-[55px] font-bold text-white mb-4 text-center mt-16">
        {t2('title')}
      </h2>

      {events.map((event: EventProps, index: number) => (
        <EventBox
          key={index}
          icon={icons[index]}
          title={event.title}
          text={event.text}
          date={event.date}
          location={event.location}
          position={event.position}
        />
      ))}
    </div>
  );
};

export default Events;


