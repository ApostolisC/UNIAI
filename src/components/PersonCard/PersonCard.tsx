import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation';

import '@/styles/globals.css';

interface Person {
    id?: string;
    image: string;
    name_gr: string;
    name_en: string
    university_gr?: string;
    university_en?: string;
    linkedin: string;
    team?: {
        name: string;
        position: string;
    }[];
    position_gr?: string;
    position_en?: string;
}

interface PersonCardProps {
    person: Person;
    borderColor: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, borderColor }) => {
    
    const pathname = usePathname();
    const locale = pathname ? pathname.split('/')[1] : 'en';

    const name = locale === 'en' ? person.name_en : person.name_gr;
    var university = locale === 'en' ? person.university_en : person.university_gr;

    //TODO remove the following line after implementing the translation for greek
    // also change university above to const university
    var university = person.university_en;



    return (
        <div
            className={`bg-[#111111] rounded-lg border-2 p-4 min-h-[25rem] shadow-md transform transition-transform hover:scale-105 flex flex-col justify-between`}
            style={{ borderColor }} // Set a minimum height for consistency
        >
            <div className="flex justify-center">
                <div className={`rounded-full border-2 overflow-hidden`} style={{ borderColor }}>
                    <Image src={person.image} alt={name} width={185} height={185} className="rounded-full" />
                </div>
            </div>
            <h2 className="text-[15px] font-semibold text-left mt-4">{name}</h2>
            <h3 className="text-sm mt-1 text-left text-white font-extralight">{university}</h3>
            <div className="flex justify-left mt-5 mb-5">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-white text-3xl hover:text-[#FF8210]" />
                </a>
            </div>

        </div>
    );
};

export default PersonCard;
