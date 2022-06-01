import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BadgeTrack = ({
    label = "label",
    icon = <FontAwesomeIcon icon={faAtom} className="w-2 h-2 text-success" />,
    className = "",
    color = "success",
}) => {
    return (
        <div
            className={
                `inline-block px-2 rounded-lg py-1 bg-opacity-20 items-center bg-${color} ` +
                className
            }
        >
            <div className="flex items-center space-x-2">
                {icon}
                <div
                    className={`font-poppins font-semibold text-[10px] tracking-widest uppercase text-${color}`}
                >
                    {label}
                </div>
            </div>
        </div>
    );
};

export default BadgeTrack;
