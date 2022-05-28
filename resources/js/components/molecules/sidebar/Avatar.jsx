import React from "react";

const Avatar = ({
    avatar = "https://source.unsplash.com/150x150/?avatar",
    name = "Dinda Anisa",
    type = "Premium User",
    ...props
}) => {
    return (
        <div
            className="flex items-center flex-col  justify-center py-4"
            {...props}
        >
            <img
                src={avatar}
                alt="Avatar"
                className="w-32 aspect-square skeleton object-cover rounded-full mb-2 animate-skeleton"
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
