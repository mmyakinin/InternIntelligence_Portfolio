import React from "react";

interface Props {
    text: string;
    className?: string;
}

export const ErrorText: React.FC<Props> = ({ text, className }) => {
    return (
        <div className={`text-red-500 font-medium text-base ${className}`}>
            {text}
        </div>
    );
};
