import React from "react";

const InputSelect = ({ name, label, Icon, options }) => {
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
                <select
                    name={name}
                    id={name}
                    className="flex-grow text-xs font-semibold text-gray-600 bg-transparent outline-none"
                >
                    {options &&
                        options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};

export default InputSelect;
