import React from "react";
import CaretDown from "../../assets/CaretDown";

const MenuItemDropdown = ({ Icon, text, isActive = false }) => {
    return (
        <div className="w-full pl-8 relative">
            {isActive && (
                <div className="w-3 h-3 absolute left-0 bg-primary rounded-full top-1/2 -translate-y-[50%] -translate-x-[50%]"></div>
            )}
            <div
                className={`flex flex-row items-center rounded-tl-lg rounded-bl-lg justify-start space-x-2 px-4 py-3 cursor-pointer ${
                    isActive ? "bg-primary" : "hover:bg-gray-100"
                } `}
            >
                <Icon
                    className={`${
                        isActive
                            ? "stroke-white text-white"
                            : "stroke-gray-500 text-gray-500"
                    } w-[16px]`}
                />
                <div
                    className={`flex-grow font-poppins font-semibold text-xs ${
                        isActive ? "text-white" : "text-gray-500"
                    }`}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default MenuItemDropdown;
