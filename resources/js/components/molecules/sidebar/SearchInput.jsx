import React from "react";
import InputTextIcon from "../../atoms/forms/InputTextIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
    return (
        <div className="w-full px-4 ">
            <InputTextIcon icon={faSearch} placeholder="Search . . ." />
        </div>
    );
};

export default SearchInput;
