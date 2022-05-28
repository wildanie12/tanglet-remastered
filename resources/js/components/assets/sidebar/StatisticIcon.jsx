import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

const StatisticIcon = ({ ...props }) => {
    return <FontAwesomeIcon icon={faChartPie} {...props} />;
};

export default StatisticIcon;
