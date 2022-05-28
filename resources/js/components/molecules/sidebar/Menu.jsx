import React from "react";
import DashboardIcon from "../../assets/DashboardIcon";
import FormIcon from "../../assets/FormIcon";
import MenuItem from "../../atoms/sidebar/MenuItem";
import StatisticIcon from "../../assets/StatisticIcon";
import AccountIcon from "../../assets/AccountIcon";
import MenuItemDropdown from "../../atoms/sidebar/MenuItemDropdown";

import FormAllIcon from "../../assets/FormAllIcon";

export const Menu = () => {
    const formDropdownItem = [
        <MenuItemDropdown Icon={FormAllIcon} text="All Forms" />,
        <MenuItemDropdown
            Icon={FormAllIcon}
            text="Published"
            isActive={true}
        />,
    ];

    return (
        <div className="w-full">
            <MenuItem Icon={DashboardIcon} text="Dashboard" hasArrow={true} />
            <MenuItem
                Icon={FormIcon}
                isActive={true}
                text="Forms"
                hasArrow={true}
                dropdownItems={formDropdownItem}
            />
            <MenuItem Icon={StatisticIcon} text="Report & Statistics" />
            <MenuItem Icon={AccountIcon} text="Account" />
        </div>
    );
};
