import {
    faChartBar,
    faClipboardList,
    faGlobeAsia,
    faPencilRuler,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
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
            <div className="flex items-center w-full p-2 space-x-2">
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
                    label="20"
                    color="warning"
                    className="bg-warning"
                    icon={
                        <FontAwesomeIcon
                            icon={faUsers}
                            className="w-3 h-3 text-warning"
                        />
                    }
                />
                <div className="text-[11px] text-poppins text-gray-600 font-medium">
                    June 15th, 2022
                </div>
            </div>
            <hr className="text-gray-200 " />
            <div className="px-4 py-2 font-poppins">
                <h4 className="mb-2 text-lg font-semibold leading-6">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h4>
                <div className="max-w-full pl-3 mb-2 text-sm leading-5 text-gray-400 border-l-2 border-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni deleniti officiis, sed blanditiis rem accusantium ex
                    reiciendis eaque nisi similique a ipsum minus autem
                    temporibus consectetur dolorum eius voluptatum hic.
                </div>
                <div className="flex justify-center w-full py-2 space-x-2">
                    <Link href="/form" className="py-1 btn btn-warning">
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            className="w-3 h-3 text-white"
                        />
                        <div>Report</div>
                    </Link>
                    <Link href="/form" className="py-1 btn btn-primary">
                        <FontAwesomeIcon
                            icon={faChartBar}
                            className="w-3 h-3 text-white"
                        />
                        <div>Statistic</div>
                    </Link>
                    <Link href="/form" className="py-1 btn btn-success">
                        <FontAwesomeIcon
                            icon={faPencilRuler}
                            className="w-3 h-3 text-white"
                        />
                        <div>Go to designer</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormCard;
