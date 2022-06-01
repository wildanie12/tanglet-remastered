import { faGlobeAsia, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BadgeTrack from "../../atoms/badges/BadgeTrack";

const FormCard = ({
    className,
    image = "https://source.unsplash.com/350x200/?event",
    title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
}) => {
    return (
        <div
            className={
                "shadow-xl bg-white rounded-xl overflow-hidden " + className
            }
        >
            <img
                className="object-cover w-full h-40 tracking"
                src={image}
                alt={title}
            />
            <div className="flex w-full p-2 space-x-2">
                <BadgeTrack
                    label="Published"
                    icon={
                        <FontAwesomeIcon
                            icon={faGlobeAsia}
                            className="w-3 h-3 text-success"
                        />
                    }
                />
                <BadgeTrack
                    label="20 Respondents"
                    color="warning"
                    className="bg-warning"
                    icon={
                        <FontAwesomeIcon
                            icon={faUsers}
                            className="w-3 h-3 text-warning"
                        />
                    }
                />
            </div>
        </div>
    );
};

export default FormCard;
