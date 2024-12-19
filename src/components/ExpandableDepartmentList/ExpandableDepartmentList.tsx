import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Team } from '@/data/teams';

interface ExpandableDepartmentListProps {
  departments: Team[];
}

const ExpandableDepartmentList: React.FC<ExpandableDepartmentListProps> = ({ departments }) => {
  const [expandedDepartmentTitle, setExpandedDepartmentTitle] = useState<string | null>(null);
  const t = useTranslations('Components');

  const handleToggle = (title: string) => {
    setExpandedDepartmentTitle(expandedDepartmentTitle === title ? null : title);
  };

  return (
    <div className="flex justify-center mb-10">
      <ul className="w-[70vw] m-10 p-4 space-y-2">
        {departments.map((department) => {
          const isExpanded = expandedDepartmentTitle === department.title;

          return (
            <li
              key={department.title}
              className={`border border-gray-300 rounded-lg shadow-md transition-all duration-300 ${
                isExpanded ? 'bg-gray-100' : 'bg-gray-200'
              }`}
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-lg font-semibold rounded-lg ${
                  isExpanded ? 'text-black' : 'text-gray-700'
                }`}
                onClick={() => handleToggle(department.title)}
              >
                <span>{t(department.title)}</span>
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronUp : faChevronDown}
                  className={`ml-2 transform transition-transform duration-200 ${
                    isExpanded ? 'text-black' : 'text-gray-500'
                  }`}
                />
              </button>
              {isExpanded && (
                <div className="p-4 text-lg text-gray-800">
                  {t(department.description).split('\n').map((line, index) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
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
