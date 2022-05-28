import React from "react";
import Avatar from "../molecules/sidebar/Avatar";
import Header from "../molecules/sidebar/Header";
import { Menu as SidebarMenu } from "../molecules/sidebar/Menu";
import SearchInput from "../molecules/sidebar/SearchInput";

const Sidebar = () => {
    return (
        <div className="sidebar w-52 shadow-xl absolute top-0 bottom-0">
            <Header />
            <Avatar />
            <SearchInput />
            <hr className="bg-gray-200 w-4/5 mx-auto my-4" />
            <SidebarMenu />
        </div>
    );
};

export default Sidebar;
