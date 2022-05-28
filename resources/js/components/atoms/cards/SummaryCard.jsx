import React from "react";

const SummaryCard = ({ Icon, number, text, className }) => {
    return (
        <div className="flex items-center p-3 space-x-4 bg-white shadow-xl rounded-2xl">
            {Icon}
            <div className={`flex-grow h-auto ${className}`}>
                <h3 className="mt-2 text-4xl font-bold leading-6">{number}</h3>
                <div className="font-bold text-md">{text}</div>
            </div>
        </div>
    );
};

export default SummaryCard;
