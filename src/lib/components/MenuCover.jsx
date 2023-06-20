/* eslint-disable react/prop-types */

import Wrapper from "./Wrapper";

const MenuCover = ({ img, title, description }) => {
    return (
        <div>
            <div
                style={{ "--image-url": `url(${img})` }}
                className="bg-[image:var(--image-url)] bg-center object-cover bg-no-repeat p-10 md:px-20 md:py-16 lg:px-20 lg:py-32"
            >
                <Wrapper maxWidth={"max-w-[1096px]"} className={`bg-black/50 text-white`}>
                    <div className="text-center py-8 md:py-22 lg:py-20">
                        <h3 className="uppercase font-semibold text-3xl md:text-6xl md:mb-7">
                            {title}
                        </h3>
                        <p className="uppercase text-xs md:text-base lg:px-14 hidden md:block">
                            {description}
                        </p>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default MenuCover;