import React from "react";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatFormIcon from "../../../atoms/FloatFormIcon";

const FormImageLogo = ({ className }) => {
    return (
        <div className={className + " relative h-52"}>
            <img
                src="https://source.unsplash.com/300x200/?coffee"
                className="object-cover w-full h-full skeleton"
                alt=""
            />
            <FloatFormIcon
                Logo={
                    <FontAwesomeIcon
                        icon={faHamburger}
                        className="w-16 h-16 text-white"
                    />
                }
                className="bg-success-100"
            />
        </div>
    );
};

export default FormImageLogo;
