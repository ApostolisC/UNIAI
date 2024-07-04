import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Person {
    image: string;
    name: string;
    name_eng: string;
    position: string;
    linkedin: string;
}

interface PersonCardProps {
    person: Person;
    borderColor: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, borderColor }) => {
    return (
        <div
            className={`bg-[#111111] rounded-lg border-2 p-4 min-h-[25rem] shadow-md transform transition-transform hover:scale-105 flex flex-col justify-between`}
            style={{ borderColor }} // Set a minimum height for consistency
        >
            <div className="flex justify-center">
                <div className={`rounded-full border-2 overflow-hidden`} style={{ borderColor }}>
                    <Image src={person.image} alt={person.name_eng} width={185} height={185} className="rounded-full" />
                </div>
            </div>
            <h2 className="text-[15px] font-semibold text-left mt-4">{person.name_eng}</h2>
            <h3 className="text-sm mt-1 text-left text-white font-extralight">{person.position}</h3>
            <div className="flex justify-left mt-5 mb-5">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-[#FF8210]" />
                </a>
            </div>
        </div>
    );
};

export default PersonCard;
