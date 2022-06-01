import React from "react";
import FormCard from "../../molecules/cards/FormCard";

const FormCardList = () => {
    return (
        <div className="relative z-10 flex items-start justify-center w-full -mt-24 space-x-4">
            <FormCard className="w-full xl:w-3/12 lg:w-4/12 md:w-6/12" />
            <FormCard className="w-full xl:w-3/12 lg:w-4/12 md:w-6/12" />
            <FormCard className="w-full xl:w-3/12 lg:w-4/12 md:w-6/12" />
        </div>
    );
};

export default FormCardList;
