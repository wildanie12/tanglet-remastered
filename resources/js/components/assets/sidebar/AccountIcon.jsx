import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const AccountIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faCircleUser} {...props} />;
};

export default AccountIcon;
