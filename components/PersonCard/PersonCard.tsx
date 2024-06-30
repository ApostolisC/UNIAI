// components/PersonCard/PersonCard.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Person {
    image: string;
    name: string;
    position: string;
    linkedin: string;
}

interface PersonCardProps {
    person: Person;
    borderColor: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, borderColor }) => {
    return (
        <div className={`bg-[#111111] rounded-lg border-2 p-6 shadow-md transform transition-transform hover:scale-105`} style={{ borderColor }}>
            <div className="flex justify-center">
                <div className={`rounded-full border-2 overflow-hidden`} style={{ borderColor }}>
                    <Image src={person.image} alt={person.name} width={185} height={185} className="rounded-full" />
                </div>
            </div>
            <h2 className="text-[15px] font-semibold text-left mt-4">{person.name}</h2>
            <h3 className="text-sm mt-1 text-left text-white font-extralight">{person.position}</h3>
            <div className="flex justify-left mt-4">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-[#FF8210] mb-4" />
                </a>
            </div>
        </div>
    );
};

export default PersonCard;
