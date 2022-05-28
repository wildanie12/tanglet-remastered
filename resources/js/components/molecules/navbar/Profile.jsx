import {
    faAtom,
    faHome,
    faPencil,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import CaretDown from "../../assets/CaretDown";
import { Menu, Transition } from "@headlessui/react";

const Profile = () => {
    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button
                        as="div"
                        className="flex items-center px-3 py-2 mr-0 space-x-3 cursor-pointer profile xl:mr-8 hover:bg-gray-100"
                    >
                        <img
                            src="https://source.unsplash.com/150x150/?avatar"
                            className="object-cover w-8 rounded-full aspect-square skeleton"
                        />
                        <h4 className="text-sm font-semibold text-gray-600 font-poppins">
                            Dinda
                        </h4>
                        <CaretDown className="w-4 h-4 stroke-gray-600" />
                    </Menu.Button>
                    <Transition
                        show={open}
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-90 opacity-0"
                    >
                        <Menu.Items
                            className="absolute w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg outline-none right-2 z-[100]"
                            static
                        >
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={
                                            `flex flex-row items-center w-full px-2 py-3 space-x-3 text-gray-500 rounded-md cursor-pointer hover:bg-gray-100` +
                                            (active && " bg-gray-100")
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faPencil}
                                            className="w-3 ml-2 "
                                        />
                                        <div className="flex-grow text-xs font-semibold select-none font-poppins">
                                            Edit Profile
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={
                                            `flex flex-row items-center w-full px-2 py-3 space-x-3 text-gray-500 rounded-md cursor-pointer hover:bg-gray-100` +
                                            (active && " bg-gray-100")
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faAtom}
                                            className="w-3 ml-2 "
                                        />
                                        <div className="flex-grow text-xs font-semibold select-none font-poppins">
                                            View Public Profile
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                            <hr className="text-gray-200" />
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={
                                            `flex flex-row items-center w-full px-2 py-3 space-x-3 text-gray-500 rounded-md cursor-pointer hover:bg-gray-100` +
                                            (active && " bg-gray-100")
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faSignOut}
                                            className="w-3 ml-2 "
                                        />
                                        <div className="flex-grow text-xs font-semibold select-none font-poppins">
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default Profile;
