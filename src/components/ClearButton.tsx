import React from "react";

import { X } from "lucide-react";

interface Props {
    onClick: VoidFunction;
    className?: string;
}

export const ClearButton: React.FC<Props> = ({ onClick, className }) => {
    return (
        <button
            className={`absolute top-1/2 right-4 opacity-30 hover:opacity-100 cursor-pointer ${className}`}
            onClick={onClick}
        >
            <X size={24} />
        </button>
    );
};
