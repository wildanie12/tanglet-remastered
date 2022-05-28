import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputTextIcon = ({ icon = faSearch, placeholder = "search ..." }) => {
    return (
        <div className="flex space-x-2 rounded-lg bg-gray-200 px-3 py-2 items-center font-poppins overflow-hidden">
            <FontAwesomeIcon icon={icon} className="w-4 text-gray-600" />
            <input
                type="text"
                className="bg-transparent outline-none text-xs font-semibold text-gray-600 placeholder:text-xs placeholder:font-normal w-full"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputTextIcon;
