import React from "react";
import FormBadges from "../../molecules/FormDesigner/FormLayerControl/FormBadges";
import FormGeneralButtons from "../../molecules/FormDesigner/FormLayerControl/FormGeneralButtons";
import FormImageLogo from "../../molecules/FormDesigner/FormLayerControl/FormImageLogo";
import PublishStatus from "../../molecules/FormDesigner/FormLayerControl/PublishStatus";

const FormLayerControl = ({ className }) => {
    return (
        <div
            className={
                className +
                " rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white font-poppins"
            }
        >
            <FormImageLogo className="w-full" />
            <div className="w-full p-4 mt-4 font-medium font-raleway">
                <FormBadges className="mb-2" />
                <h4 className="mb-2 text-xl font-semibold font-poppins text-primary">
                    Keanggotaan Gotong rotong upaya pembersihan sampah pantai
                </h4>
                <div className="form-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quae dolore, temporibus numquam minima distinctio
                        iure aut itaque cum aliquam, natus cumque velit
                        reprehenderit. Laboriosam alias, iure ratione
                        repellendus magnam rerum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quae dolore, temporibus numquam minima distinctio
                        iure aut itaque cum aliquam, natus cumque velit
                        reprehenderit. Laboriosam alias, iure ratione
                        repellendus magnam rerum.
                        <br /> Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Quae dolore, temporibus numquam minima
                        distinctio iure aut itaque cum aliquam, natus cumque
                        velit reprehenderit. Laboriosam alias, iure ratione
                        repellendus magnam rerum.
                    </p>
                </div>
                <div className="flex items-stretch w-full my-4 space-x-2">
                    <PublishStatus className="w-full md:w-7/12"></PublishStatus>
                    <FormGeneralButtons className="w-full md:w-5/12" />
                </div>
            </div>
        </div>
    );
};

export default FormLayerControl;
