import { faEye, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const PublishStatus = ({ className }) => {
    return (
        <div
            className={
                "flex flex-col items-center justify-center border-4 gap-1 py-2 rounded-xl border-success " +
                className
            }
        >
            <div className="flex items-center justify-center gap-2 text-success">
                <FontAwesomeIcon icon={faGlobeAsia} className="w-6 h-6" />
                <div className="text-3xl font-bold">Published</div>
            </div>
            <Link className="flex px-3 py-2 space-x-2 btn btn-gray">
                <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                <div>View as Public</div>
            </Link>
        </div>
    );
};

export default PublishStatus;
