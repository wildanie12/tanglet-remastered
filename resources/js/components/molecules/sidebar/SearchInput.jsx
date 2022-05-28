import React from "react";
import InputTextIcon from "../../atoms/forms/InputTextIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
    return (
        <div className="py-2 px-4 w-full">
            <InputTextIcon icon={faSearch} placeholder="Search . . ." />
        </div>
    );
};

export default SearchInput;
