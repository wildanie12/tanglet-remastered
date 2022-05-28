import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FormDraftIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faFileAlt} {...props} />;
};

export default FormDraftIcon;
