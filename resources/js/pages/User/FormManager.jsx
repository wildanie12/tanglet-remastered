import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "../../components/organisms/Sidebar";

const FormManager = ({ appTitle }) => {
    return (
        <>
            <Head>
                <title>{appTitle}</title>
            </Head>
            <Sidebar />
            <div className="w-8">FormManager</div>
        </>
    );
};

export default FormManager;
