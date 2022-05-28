import { faArchive, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FormArchievedIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faArchive} {...props} />;
};

export default FormArchievedIcon;
