import React from "react";
import AccountIcon from "../assets/AccountIcon";
import DashboardIcon from "../assets/DashboardIcon";
import FormIcon from "../assets/FormIcon";
import StatisticIcon from "../assets/StatisticIcon";
import Avatar from "../molecules/sidebar/Avatar";
import Header from "../molecules/sidebar/Header";
import { Menu as SidebarMenu } from "../molecules/sidebar/Menu";
import SearchInput from "../molecules/sidebar/SearchInput";
import FormAllIcon from "../assets/FormAllIcon";
import FormPublishedIcon from "../assets/FormPublishedIcon";
import FormDraftIcon from "../assets/FormDraftIcon";
import FormArchievedIcon from "../assets/FormArchievedIcon";
import ReportPlusIcon from "../assets/ReportPlusIcon";
import ReportClipboardIcon from "../assets/ReportClipboardIcon";
import ReportStatisticIcon from "../assets/ReportStatisticIcon";
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
        <div className="fixed top-0 bottom-0 flex flex-col h-screen shadow-xl sidebar w-52">
            <Header />
            <Avatar />
            <SearchInput />
            <hr className="w-4/5 mx-auto my-2 bg-gray-200" />
            <div className="flex-grow overflow-y-auto scrollbar">
                <SidebarMenu menuItems={menuItems} />
                <SidebarMenu menuItems={menuItems} />
                <SidebarMenu menuItems={menuItems} />
            </div>
            <hr className="w-4/5 mx-auto my-2 bg-gray-200" />
            <SidebarMenu menuItems={footerMenuItems} />
            <Footer />
        </div>
    );
};

export default Sidebar;
