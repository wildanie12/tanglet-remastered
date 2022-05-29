import {
    faCalendarAlt,
    faLightbulb,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DotGrid from "../../assets/DotGrid";
import InputSelect from "../../atoms/forms/InputSelect";

import InputTextLabel from "../../atoms/forms/InputTextLabel";

const FormFilter = ({ className }) => {
    return (
        <div className={`p-6 text-white relative bg-primary ${className}`}>
            <DotGrid className="absolute left-0 w-32 transform rotate-45 -z-0 -top-16 aspect-square" />
            <div className="relative z-10 flex items-center justify-center w-full mx-auto space-x-3 xl:w-10/12">
                <div className="lg:w-4/12">
                    <InputTextLabel
                        name="filter_search"
                        label="Search by Title"
                        placeholder="Search form title here ..."
                        Icon={
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="w-4 h-4 text-gray-500"
                            />
                        }
                    />
                </div>
                <div className="lg:w-2/12">
                    <InputTextLabel
                        name="filter_date_from"
                        label="From Date"
                        placeholder="Write here ..."
                        type="date"
                        Icon={
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="w-4 h-4 text-gray-500"
                            />
                        }
                    />
                </div>
                <div className="lg:w-2/12">
                    <InputTextLabel
                        name="filter_date_to"
                        label="To Date"
                        type="date"
                        placeholder="Write here ..."
                        Icon={
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="w-4 h-4 text-gray-500"
                            />
                        }
                    />
                </div>
                <div className="lg:w-2/12">
                    <InputSelect
                        name="filter_status"
                        label="Status"
                        Icon={
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                className="w-4 h-4 text-gray-500"
                            />
                        }
                        options={[
                            { value: "", text: "All" },
                            { value: "LOCKED", text: "Locked" },
                            { value: "UNLOCKED", text: "Unlocked" },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormFilter;
