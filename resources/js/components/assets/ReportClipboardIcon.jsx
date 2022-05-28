import { faClipboardList, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReportClipboardIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faClipboardList} {...props} />;
};

export default ReportClipboardIcon;
