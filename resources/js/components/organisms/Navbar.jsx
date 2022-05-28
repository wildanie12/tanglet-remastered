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
                <Profile />
            </div>
        </div>
    );
};

export default Navbar;
