import React from "react";
import FormCard from "../../molecules/cards/FormCard";

const FormCardList = () => {
    return (
        <div className="relative z-10 flex flex-wrap w-full px-4 -mt-24 md:px-8">
            <div className="w-full p-2 md:w-1/2 lg:w-4/12">
                <FormCard className="box-border" />
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-4/12">
                <FormCard className="box-border" />
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-4/12">
                <FormCard className="box-border" />
            </div>
        </div>
    );
};

export default FormCardList;
