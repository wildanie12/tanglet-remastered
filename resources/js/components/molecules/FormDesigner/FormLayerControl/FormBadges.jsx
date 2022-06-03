import { faGlobeAsia, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BadgeTrack from "../../../atoms/badges/BadgeTrack";

const FormBadges = ({ className }) => {
    return (
        <div
            className={
                "flex items-center justify-start w-full space-x-2 " + className
            }
        >
            <BadgeTrack
                label="Published"
                icon={
                    <FontAwesomeIcon
                        icon={faGlobeAsia}
                        className="w-3 h-3 text-success"
                    />
                }
                textColor="text-success"
                bgColor="bg-success"
            />
            <BadgeTrack
                label="257 Respondents"
                icon={
                    <FontAwesomeIcon
                        icon={faUsers}
                        className="w-3 h-3 text-warning"
                    />
                }
                textColor="text-warning"
                bgColor="bg-warning"
            />
            <div className="text-[11px] text-poppins text-gray-600 font-medium">
                June 15th, 2022
            </div>
        </div>
    );
};

export default FormBadges;
