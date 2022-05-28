import React from "react";

const InputTextLabel = ({ name, label, placeholder, Icon, type = "text" }) => {
    return (
        <div className="w-full">
            <label
                htmlFor="name"
                className="block pl-1 text-[10px] font-bold tracking-wide text-gray-300 uppercase"
            >
                {label}
            </label>
            <div className="flex items-center w-full px-2 py-1 space-x-2 bg-gray-100 rounded-lg shadow-lg">
                {Icon}
                <input
                    type={type}
                    className="flex-grow text-xs font-semibold text-gray-600 bg-transparent outline-none font-poppins placeholder:font-poppins placeholder:text-xs placeholder:font-medium"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputTextLabel;
