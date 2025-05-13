import React, { ReactNode } from 'react';

interface ButtonProps {
    text?: string;
    icon?: ReactNode;
    onClick?: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
                 bg-gradient-to-tr from-pink-500 to-purple-500 text-white 
                 font-semibold shadow-lg hover:shadow-xl 
                 transition-all duration-300 ease-in-out 
                 hover:brightness-110 active:scale-95 
                 focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
        >
            {icon && <span className="text-lg">{icon}</span>}
            {text && <span className="leading-none">{text}</span>}
        </button>
    );
};

export default Button;
