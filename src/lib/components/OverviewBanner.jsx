/* eslint-disable react/prop-types */
const OverviewBanner = ({img, title, description, bgcolor}) => {
    return (
        <div
            style={{ "--image-url": `url(${img})` }}
            className="bg-[image:var(--image-url)] object-cover bg-no-repeat p-5 md:p-10 lg:px-20 lg:py-24"
        >
            <div className={`${bgcolor} px-7 py-10 md:px-10 lg:px-48 lg:py-20`}>
                <div className="text-center">
                    <h3 className="uppercase text-4xl mb-5">{title}</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OverviewBanner;