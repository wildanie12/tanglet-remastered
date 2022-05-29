import React from "react";
import HeaderVector from "../../assets/form-manager/HeaderVector";
import HeaderIllustration from "../../assets/form-manager/HeaderIllustration";
import DotGrid from "../../assets/DotGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList,
    faPlus,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import SummaryCard from "../../atoms/cards/SummaryCard";
import { Link } from "@inertiajs/inertia-react";

const FormSummary = () => {
    return (
        <div className="relative flex items-center w-full h-56">
            <HeaderVector className="absolute bottom-0 left-0 z-0 w-auto h-full" />
            <div className="z-10 flex items-center w-full font-poppins">
                <div className="flex items-center flex-grow ml-16 md:w-1/2 ">
                    <div className="flex flex-col items-start justify-start">
                        <h2 className="mr-10 text-2xl font-bold">Your Forms</h2>
                        <div className="text-lg text-gray-500">
                            List of all your active forms
                        </div>
                        <Link className="w-auto mt-2 btn btn-success">
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="w-4 aspect-square"
                            />
                            <div>Create Form</div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-end space-x-8">
                    <div className="flex-col items-center hidden space-y-2 md:flex md:w-auto md:items-stretch">
                        <SummaryCard
                            Icon={
                                <FontAwesomeIcon
                                    icon={faUsers}
                                    className="text-7xl aspect-square text-warning"
                                />
                            }
                            number={37}
                            text="Respondents"
                            className="text-warning"
                        />
                        <SummaryCard
                            Icon={
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                    className="text-7xl aspect-square text-primary"
                                />
                            }
                            number={11}
                            text="Forms"
                            className="text-primary"
                        />
                    </div>
                    <HeaderIllustration className="relative z-[1] w-56 h-52" />
                </div>
                <DotGrid className="absolute right-0 rotate-90 w-28 aspect-square z-0 translate-x-[32%] top-0" />
            </div>
        </div>
    );
};

export default FormSummary;
