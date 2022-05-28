import React from "react";
import MenuItem from "../../atoms/sidebar/MenuItem";

export const Menu = ({ menuItems }) => {
    return (
        <div className="w-full">
            {menuItems.map((menu, index) => {
                return menu.dropdownItems ? (
                    <MenuItem
                        key={index}
                        Icon={menu.Icon}
                        text={menu.text}
                        hasArrow={true}
                        isActive={menu.isActive || false}
                        dropdownItems={menu.dropdownItems}
                    />
                ) : (
                    <MenuItem
                        key={index}
                        Icon={menu.Icon}
                        text={menu.text}
                        isActive={menu.isActive || false}
                    />
                );
            })}
        </div>
    );
};
