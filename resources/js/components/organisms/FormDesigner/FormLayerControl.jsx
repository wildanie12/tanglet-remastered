import React from "react";
import FormImageLogo from "../../molecules/FormDesigner/FormLayerControl/FormImageLogo";

const FormLayerControl = ({ className }) => {
    return (
        <div
            className={
                className +
                " rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white font-poppins"
            }
        >
            <FormImageLogo className="w-full" />
            div
            <div className="w-full p-4 font-medium font-raleway">
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
            </div>
        </div>
    );
};

export default FormLayerControl;
