import React from "react";

const QuestionPageIcon = ({ Logo, className = "bg-white" }) => {
    return (
        <div
            className={
                className +
                " flex items-center justify-center w-12 aspect-square rounded-lg"
            }
        >
            {Logo}
        </div>
    );
};

export default QuestionPageIcon;
