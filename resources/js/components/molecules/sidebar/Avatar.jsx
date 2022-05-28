import React from "react";

const Avatar = ({
    avatar = "https://source.unsplash.com/150x150/?avatar",
    name = "Dinda Anisa",
    type = "Premium User",
    ...props
}) => {
    return (
        <div
            className="flex flex-col items-center justify-center py-4"
            {...props}
        >
            <img
                src={avatar}
                alt="Avatar"
                className="object-cover w-20 mb-2 rounded-full xl:w-28 aspect-square skeleton animate-skeleton"
            />
            <h4 className="font-poppins font-semibold text-[18px] mb-0 text-gray-500">
                {name}
            </h4>
            <span className="uppercase font-bold text-[9px] text-gray-400">
                {type}
            </span>
        </div>
    );
};

export default Avatar;
