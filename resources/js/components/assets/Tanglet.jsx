import React from "react";

const Tanglet = ({ width, height, className, fill = "white" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            fill={fill}
            viewBox="0 0 509 509"
        >
            <defs></defs>
            <path d="M428,509H83A82,82,0,0,1,1,427V82A82,82,0,0,1,83,0H428a82,82,0,0,1,82,82V427A82,82,0,0,1,428,509Zm39-226-167-1-12,30H459ZM237,388H435l9-30H211l-11,30h37ZM126,371l-5-24-0.455-.909L96,405h80l19-50-20,12-9,24H117Zm17-25h14l29-14H128Zm-2-50h79l70-182-75-2L141,295l-0.365,1H141Zm5,60-17.634-14.85L136,386l110-72-14,36h18.143l26.714-68H258l-11,30-20.19,6.962ZM187,63L31,446H212l19.828-50H213l-11,31H62L201,82H337L277,236h18.138L363,63H187ZM297,244H249l-10,30H470l9-30H297Zm-71-7-17,44H160l18-44h48Z" />
        </svg>
    );
};

export default Tanglet;
