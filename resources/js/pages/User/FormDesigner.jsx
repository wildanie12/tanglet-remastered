import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import Sidebar from "../../components/organisms/Sidebar";

const FormDesigner = ({ appTitle }) => {
    return (
        <>
            <Head>
                <title>{appTitle}</title>
            </Head>
            <Sidebar />
            <div className="flex">
                <div className="w-52 shrink-0"></div>
                <div className="flex-grow overflow-hidden">
                    <Navbar />
                    <h4 className="text-2xl">Form Designer is here</h4>
                </div>
            </div>
        </>
    );
};

export default FormDesigner;
