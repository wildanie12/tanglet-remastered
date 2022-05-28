import React from "react";

import Tanglet from "../../assets/Tanglet";

const Header = () => {
    return (
        <div className="flex flex-row items-center justify-center space-x-3 bg-primary text-white p-3">
            <Tanglet className="w-6" color="white" />
            <h4 className="font-poppins font-bold uppercase text-[13px] tracking-widest">
                Tanglet
            </h4>
        </div>
    );
};

export default Header;
