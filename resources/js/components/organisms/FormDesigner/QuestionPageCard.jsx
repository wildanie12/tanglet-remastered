import React from "react";
import QuestionDraggable from "../../molecules/FormDesigner/QuestionPageCard/QuestionDraggable";
import QuestionPageControl from "../../molecules/FormDesigner/QuestionPageCard/QuestionPageControl";
import QuestionPageHeader from "../../molecules/FormDesigner/QuestionPageCard/QuestionPageHeader";

const QuestionPageCard = ({ className }) => {
    return (
        <div
            className={
                "shadow-xl bg-white rounded-xl outline-gray overflow-hidden " +
                className
            }
        >
            <div className="flex items-center justify-between w-full">
                <QuestionPageHeader className="flex-grow" />
                <QuestionPageControl />
            </div>
            <hr className="mt-2 text-gray-100" />
            <div className="p-2 bg-blue-50 lg:p-6">
                <QuestionDraggable />
            </div>
        </div>
    );
};

export default QuestionPageCard;
