'use client';

import '@/styles/globals.css';
import EventBox from '@/src/components/events/event';
import { useTranslations } from 'next-intl';

const Events = () => {
  const t = useTranslations('EventsPage');
  const t2 = useTranslations('Components');

  // Static events data with explicit typing for 'position'
  const events = [
    {
      icon: "/events/IMG_2504-1152x2048.jpg",
      title: t2("events.0.title"),
      text: t2("events.0.text"),
      date: t2("events.0.date"),
      location: t2("events.0.location"),
      position: "left" as "left", // Explicitly cast to the expected type
    },
    {
      icon: "/events/20231215_193022-1152x1536.jpg",
      title: t2("events.1.title"),
      text: t2("events.1.text"),
      date: t2("events.1.date"),
      location: t2("events.1.location"),
      position: "right" as "right", // Explicitly cast to the expected type
    },
    {
      icon: "/events/pint_of_ai_art-1362x2048.jpeg",
      title: t2("events.2.title"),
      text: t2("events.2.text"),
      date: t2("events.2.date"),
      location: t2("events.2.location"),
      position: "left" as "left",
    },
    {
      icon: "/events/GroupPic-1536x1152.jpg",
      title: t2("events.3.title"),
      text: t2("events.3.text"),
      date: t2("events.3.date"),
      location: t2("events.3.location"),
      position: "right" as "right",
    },
    {
      icon: "/events/Workshop-768x1317.jpeg",
      title: t2("events.4.title"),
      text: t2("events.4.text"),
      date: t2("events.4.date"),
      location: t2("events.4.location"),
      position: "left" as "left",
    },
    {
      icon: "/events/20230930_170151-1152x1536.jpg",
      title: t2("events.5.title"),
      text: t2("events.5.text"),
      date: t2("events.5.date"),
      location: t2("events.5.location"),
      position: "right" as "right",
    },
  ];

  return (
    <div>
      <h2 className="text-[40px] md:text-[55px] font-bold text-white mb-4 text-center mt-16">
        {t("title")}
      </h2>
      {events.map((event, index) => (
        <EventBox
          key={index}
          icon={event.icon}
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
