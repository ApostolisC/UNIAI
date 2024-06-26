// components/DynamicButton.tsx
import React from 'react';

interface DynamicButtonProps {
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  children: React.ReactNode; // Correctly type the children prop
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ 
  borderColor = 'transparent',
  textColor = 'white',
  backgroundColor = 'blue',
  hoverColor = 'darkblue',
  children 
}) => {
  return (
    <button 
      className={`px-4 py-2 font-semibold text-xl rounded-2xl transition duration-300`}
      style={{
        borderColor: borderColor,
        color: textColor,
        backgroundColor: backgroundColor,
        borderWidth: borderColor !== 'transparent' ? '1px' : '0px',
        borderStyle: borderColor !== 'transparent' ? 'solid' : 'none'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
    >
      {children}
    </button>
  );
};

export default DynamicButton;
