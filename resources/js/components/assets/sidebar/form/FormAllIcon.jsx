import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const FormAllIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faTh} {...props} />;
};

export default FormAllIcon;
