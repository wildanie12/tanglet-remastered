import { Head } from "@inertiajs/inertia-react";
import React from "react";
import FormLayerControl from "../../components/organisms/FormDesigner/FormLayerControl";
import QuestionPageCard from "../../components/organisms/FormDesigner/QuestionPageCard";
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
                    <div className="p-2 content lg:p-4 xl:p-8">
                        <div className="flex items-start justify-start w-full gap-2 md:gap-4">
                            <FormLayerControl className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12" />
                            <div className="w-full md:w-1/2 lg:w-8/12 xl:w-9/12">
                                <QuestionPageCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormDesigner;
