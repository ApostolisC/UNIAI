// components/ExpandableDepartmentList.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Team } from '../../data/teams';

interface ExpandableDepartmentListProps {
    departments: Team[];
    excludedDepartments?: string[]; // Departments to exclude by title
}

const ExpandableDepartmentList: React.FC<ExpandableDepartmentListProps> = ({ departments}) => {
    const [expandedDepartmentTitle, setExpandedDepartmentTitle] = useState<string | null>(null);

    const filteredDepartments = departments.filter(department => department.title !== "Founders" && department.title !== "Board" && department.title !== "Makeathon Lead" );

    const handleToggle = (title: string) => {
        setExpandedDepartmentTitle(expandedDepartmentTitle === title ? null : title);
    };

    const color1 = 'bg-gradient-to-l from-[#FF7D07] to-[#9202D8]'; // Color 1
    const color2 = 'bg-gradient-to-r from-[#FF7D07] to-[#9202D8]'; // Color 2

    return (
        <div className="flex justify-center mb-10">
            <ul className="w-[70vw] m-10 p-4 space-y-2">
                {filteredDepartments.map((department, index) => {
                        const isExpanded = expandedDepartmentTitle === department.title;
                        const bgColor = isExpanded
                            ? index % 2 === 0
                                ? color1
                                : color2
                            : '#202020';

                        return (
                            <li
                                key={department.title}
                                className={`border border-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out ${bgColor}`}
                                style={{ backgroundColor: bgColor }}
                            >
                                <button
                                    className={`w-full flex justify-between items-center p-4 text-lg font-semibold rounded-lg
                                    ${isExpanded ? 'text-white' : 'text-gray-200'}
                                    transition duration-300 ease-in-out`}
                                    onClick={() => handleToggle(department.title)}
                                >
                                    <span>{department.title}</span>
                                    <FontAwesomeIcon
                                        icon={isExpanded ? faChevronUp : faChevronDown}
                                        className={`ml-2 transform transition-transform duration-200 ${isExpanded ? 'text-white' : 'text-gray-500'}`}
                                    />
                                </button>
                                {isExpanded && (
                                    <div className="p-4 text-xl bg-gray-100 text-gray-700 rounded-b-lg">
                                        {department.description.split('\n').map((line, index) => (
                                            <p key={index} className="mb-2">{line}</p>
                                        ))}
                                    </div>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ExpandableDepartmentList;
