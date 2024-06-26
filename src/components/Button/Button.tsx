import React from 'react';

interface ButtonProps {
  textColor: string;
  bgColor: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, children }) => {
  return (
    <button
      className={`rounded-12 px-[30px] py-[20px] flex items-center gap-btn-gap`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
