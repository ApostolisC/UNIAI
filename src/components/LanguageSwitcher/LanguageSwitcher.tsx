import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const LanguageSwitcher: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Globe Icon */}
            <div className="p-4 rounded-full shadow-md cursor-pointer">
                <FontAwesomeIcon icon={faGlobe as IconProp} className="text-white" />
            </div>

            {/* Language Buttons */}
            {isHovered && (
                <div className="absolute top-full mt-0 flex flex-col items-center gap-1 bg-[#222222] p-2 rounded-md shadow-md z-10">
                    <button
                        className="text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={() => alert('Language changed to English!')}
                    >
                        English
                    </button>
                    <button
                        className="text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={() => alert('Language changed to Greek!')}
                    >
                        Ελληνικά
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
