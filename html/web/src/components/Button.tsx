import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#5cfffa] to-[#ff2e57] hover:opacity-90 transition-opacity"
    >
      {children}
    </button>
  );
};

export default Button;