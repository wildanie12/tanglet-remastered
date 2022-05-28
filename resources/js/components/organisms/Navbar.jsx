import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Profile from "../molecules/navbar/Profile";

const Navbar = () => {
    return (
        <div className="w-full bg-white shadow-xl shadow-slate-200">
            <div className="flex flex-row">
                <div className="flex-grow p-3">
                    <Link
                        href="#"
                        className="text-sm font-semibold text-gray-500 font-poppins"
                    >
                        Form Manager
                    </Link>
                </div>
                <div className="flex items-center justify-end space-x-4 md:mr-4">
                    <Link href="/form" className="text-white btn btn-success">
                        <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                        <span className="hidden md:block">Create new form</span>
                    </Link>
                </div>
                <Profile />
            </div>
        </div>
    );
};

export default Navbar;
