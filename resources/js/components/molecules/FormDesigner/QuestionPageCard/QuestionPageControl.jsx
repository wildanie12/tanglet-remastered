import {
    faEye,
    faEyeSlash,
    faPencil,
    faPlus,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const QuestionPageControl = () => {
    return (
        <div className="flex items-center px-3 space-x-2">
            <div className="text-xs font-medium tracking-[.5em] text-gray-400 uppercase font-poppins">
                Page #1
            </div>
            <Link href="#" className="py-1 btn btn-success">
                <FontAwesomeIcon icon={faPlus} className="text-white" />
                <div className="font-poppins">Add Question</div>
            </Link>
            <button type="button" className="rounded-full btn btn-warning">
                <FontAwesomeIcon icon={faPencil} className="text-white" />
            </button>
            <button type="button" className="rounded-full btn btn-error">
                <FontAwesomeIcon
                    icon={faTrash}
                    className="w-3 h-3 text-white"
                />
            </button>
            <button type="button" className="rounded-full btn btn-white">
                <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="w-3 h-3 text-gray-600"
                />
            </button>
        </div>
    );
};

export default QuestionPageControl;
