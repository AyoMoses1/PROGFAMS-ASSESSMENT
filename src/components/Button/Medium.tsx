import React from 'react';

interface ButtonProps {
  textColor: string;
  bgColor: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, children }) => {
  return (
    <button
      className={`rounded-12 px-[28px] py-[14px]`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: '18px',
        fontWeight: 600
      }}
    >
      {children}
    </button>
  );
};

export default Button;
