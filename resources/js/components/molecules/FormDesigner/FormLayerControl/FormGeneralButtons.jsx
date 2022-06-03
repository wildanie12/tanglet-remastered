import {
    faChartBar,
    faClipboardList,
    faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const FormGeneralButtons = ({ className }) => {
    return (
        <div className={"flex flex-col gap-1 " + className}>
            <Link className="justify-center btn btn-primary">
                <FontAwesomeIcon icon={faChartBar} className="w-4 h-4" />
                <div>Go to Statistics</div>
            </Link>
            <Link className="justify-center btn btn-success">
                <FontAwesomeIcon icon={faClipboardList} className="w-4 h-4" />
                <div>Go to report</div>
            </Link>
            <Link className="justify-center btn btn-gray">
                <FontAwesomeIcon icon={faFileAlt} className="w-4 h-4" />
                <div>Set as draft</div>
            </Link>
        </div>
    );
};

export default FormGeneralButtons;
