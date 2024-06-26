// components/DynamicButton.tsx
import React from 'react';

interface DynamicButtonProps {
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick prop
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ 
  borderColor = 'transparent',
  textColor = 'white',
  backgroundColor = 'blue',
  hoverColor = 'darkblue',
  children,
  onClick
}) => {
  return (
    <button 
      className={`px-4 py-2 m-2 text-xl rounded-2xl transition duration-300`}
      style={{
        borderColor: borderColor,
        color: textColor,
        backgroundColor: backgroundColor,
        borderWidth: borderColor !== 'transparent' ? '1px' : '0px',
        borderStyle: borderColor !== 'transparent' ? 'solid' : 'none',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
      onClick={onClick} // Attach the onClick handler here
    >
      {children}
    </button>
  );
};

export default DynamicButton;
