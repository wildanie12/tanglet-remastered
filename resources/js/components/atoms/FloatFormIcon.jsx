import React from "react";

const FloatFormIcon = ({ Logo, className = "bg-white" }) => {
    return (
        <div
            className={
                className +
                " flex items-center justify-center w-24 aspect-square rounded-lg absolute left-4 bottom-0 translate-y-1/4"
            }
        >
            {Logo}
        </div>
    );
};

export default FloatFormIcon;
