import React from "react";
import CaretDown from "../../assets/CaretDown";

const MenuItem = ({
    Icon,
    text,
    hasArrow = false,
    isActive = false,
    dropdownItems = false,
}) => {
    return (
        <div className={`w-full relative  ${isActive && "bg-gray-100"}`}>
            <div className="flex flex-row items-center justify-start space-x-2 px-4 py-3 cursor-pointer hover:bg-gray-100">
                {isActive && (
                    <div className="w-3 h-3 absolute left-0 bg-primary rounded-full -translate-x-[50%]"></div>
                )}
                <Icon
                    className={`${
                        isActive
                            ? "stroke-primary text-primary ml-0-i"
                            : "stroke-gray-500 text-gray-500"
                    } w-[16px]`}
                />
                <div
                    className={`flex-grow font-poppins font-semibold text-xs ${
                        isActive ? "text-primary" : "text-gray-500"
                    }`}
                >
                    {text}
                </div>
                {hasArrow && (
                    <CaretDown
                        className={`w-3 h-3 ${
                            isActive ? "stroke-primary" : "stroke-gray-500"
                        }`}
                    />
                )}
            </div>
            {dropdownItems &&
                dropdownItems.map((MenuDropdown, index) => {
                    return MenuDropdown;
                })}
        </div>
    );
};

export default MenuItem;
