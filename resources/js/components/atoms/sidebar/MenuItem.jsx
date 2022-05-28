import React from "react";
import CaretDown from "../../assets/CaretDown";
import MenuItemDropdown from "./MenuItemDropdown";
import { Disclosure, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

const MenuItem = ({
    Icon,
    text,
    hasArrow = false,
    isActive = false,
    dropdownItems = false,
}) => {
    return dropdownItems ? (
        <Disclosure
            as="div"
            defaultOpen={isActive}
            className={`w-full relative ${isActive ? "bg-gray-100" : ""}`}
        >
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as="div"
                        className="flex flex-row items-center justify-start px-4 py-3 space-x-2 cursor-pointer hover:bg-gray-100"
                    >
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
                                className={
                                    `w-3 h-3 transition-all duration-200 ease-out ${
                                        isActive
                                            ? "stroke-primary"
                                            : "stroke-gray-500"
                                    } ` + (open && "transform rotate-180")
                                }
                            />
                        )}
                    </Disclosure.Button>
                    {open && (
                        <Disclosure.Panel
                            as={motion.div}
                            animate={{ height: "auto" }}
                            initial={{ height: 0 }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden outline-none"
                            static
                        >
                            {dropdownItems &&
                                dropdownItems.map((menuDropdown, index) => (
                                    <MenuItemDropdown
                                        key={index}
                                        Icon={menuDropdown.Icon}
                                        text={menuDropdown.text}
                                        isActive={menuDropdown.isActive}
                                    />
                                ))}
                        </Disclosure.Panel>
                    )}
                </>
            )}
        </Disclosure>
    ) : (
        <div className="flex flex-row items-center justify-start px-4 py-3 space-x-2 cursor-pointer hover:bg-gray-100">
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
                    className={
                        `w-3 h-3 transition-all duration-200 ease-out ${
                            isActive ? "stroke-primary" : "stroke-gray-500"
                        } ` + (open && "transform rotate-180")
                    }
                />
            )}
        </div>
    );
};

export default MenuItem;
