import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "../../components/organisms/Sidebar";
import Navbar from "../../components/organisms/Navbar";

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
                    <div className="text-3xl">FormManager</div>
                </div>
            </div>
        </>
    );
};

export default FormManager;
