import Wrapper from "./Wrapper";

/* eslint-disable react/prop-types */
const TopBanner = ({ img, title, description }) => {
    return (
        <div
            style={{ "--image-url": `url(${img})` }}
            className="bg-[image:var(--image-url)] bg-center object-cover bg-no-repeat px-10 py-16 md:px-20 md:py-20 lg:px-20 lg:py-40"
        >
            <Wrapper className={`bg-black/50 text-white`}>
                <div className="text-center py-8 md:py-22 lg:py-32">
                    <h3 className="uppercase font-semibold text-3xl md:text-6xl mb-3 md:mb-7">
                        {title}
                    </h3>
                    <p className="uppercase text-xs md:text-base">
                        {description}
                    </p>
                </div>
            </Wrapper>
        </div>
    );
};

export default TopBanner;
