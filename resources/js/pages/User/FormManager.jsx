import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "../../components/organisms/Sidebar";
import Navbar from "../../components/organisms/Navbar";

import FormSummary from "../../components/organisms/FormManager/FormSummary";
import FormFilter from "../../components/organisms/FormManager/FormFilter";

const FormManager = ({ appTitle }) => {
    return (
        <>
            <Head>
                <title>{appTitle}</title>
            </Head>
            <Sidebar />
            <div className="flex">
                <div className="w-52"></div>
                <div className="flex-grow">
                    <Navbar />
                    {/* header Jumbotron */}
                    <FormSummary />
                    <FormFilter className="-mt-1" />
                </div>
            </div>
        </>
    );
};

export default FormManager;
