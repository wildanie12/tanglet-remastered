import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FloatFormIcon from "../../../atoms/FloatFormIcon";
import QuestionPageIcon from "../../../atoms/QuestionPageIcon";

const QuestionPageHeader = ({ className = "" }) => {
    return (
        <div className={"flex items-center p-2 space-x-3 " + className}>
            <QuestionPageIcon
                Logo={
                    <FontAwesomeIcon
                        icon={faHamburger}
                        className="w-8 h-8 text-white"
                    />
                }
                className="bg-success-100"
            />
            <div className="font-poppins">
                <div className="mb-1 text-lg font-semibold leading-4 text-primary">
                    Taste of Foods
                </div>
                <div className="text-xs font-medium leading-3 tracking-wide text-gray-600">
                    Your opinion on certain foods
                </div>
            </div>
        </div>
    );
};

export default QuestionPageHeader;
