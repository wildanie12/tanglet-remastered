import React from "react";
import Avatar from "../molecules/sidebar/Avatar";
import Header from "../molecules/sidebar/Header";
import { Menu as SidebarMenu } from "../molecules/sidebar/Menu";
import SearchInput from "../molecules/sidebar/SearchInput";

import AccountIcon from "../assets/sidebar/AccountIcon";
import DashboardIcon from "../assets/sidebar/DashboardIcon";
import StatisticIcon from "../assets/sidebar/StatisticIcon";

import FormIcon from "../assets/sidebar/FormIcon";
import FormAllIcon from "../assets/sidebar/form/FormAllIcon";
import FormPublishedIcon from "../assets/sidebar/form/FormPublishedIcon";
import FormDraftIcon from "../assets/sidebar/form/FormDraftIcon";
import FormArchievedIcon from "../assets/sidebar/form/FormArchievedIcon";

import ReportPlusIcon from "../assets/sidebar/report/ReportPlusIcon";
import ReportClipboardIcon from "../assets/sidebar/report/ReportClipboardIcon";
import ReportStatisticIcon from "../assets/sidebar/report/ReportStatisticIcon";

import Footer from "../molecules/sidebar/Footer";

const Sidebar = () => {
    const menuItems = [
        {
            Icon: DashboardIcon,
            text: "Dashboard",
        },
        {
            Icon: FormIcon,
            isActive: true,
            text: "Forms",
            hasArrow: true,
            dropdownItems: [
                { Icon: FormAllIcon, text: "All Forms" },
                { Icon: FormPublishedIcon, text: "Published", isActive: true },
                { Icon: FormDraftIcon, text: "Draft" },
                { Icon: FormArchievedIcon, text: "Archieved" },
            ],
        },
        {
            Icon: StatisticIcon,
            text: "Report & Statistics",
            dropdownItems: [
                { Icon: ReportPlusIcon, text: "Create" },
                { Icon: ReportClipboardIcon, text: "Report" },
                { Icon: ReportStatisticIcon, text: "Statistic" },
            ],
        },
        {
            Icon: AccountIcon,
            text: "Account",
        },
    ];

    const footerMenuItems = [
        {
            Icon: DashboardIcon,
            text: "Settings",
        },
    ];

    return (
        <div className="fixed top-0 bottom-0 z-50 flex flex-col h-screen bg-white shadow-xl sidebar w-52">
            <Header />
            <Avatar />
            <SearchInput />
            <hr className="w-4/5 mx-auto my-2 bg-gray-200" />
            <div className="flex-grow overflow-y-auto scrollbar">
                <SidebarMenu menuItems={menuItems} />
                <hr className="w-4/5 mx-auto my-2 bg-gray-200" />
                <SidebarMenu menuItems={footerMenuItems} />
            </div>
            <Footer />
        </div>
    );
};

export default Sidebar;
