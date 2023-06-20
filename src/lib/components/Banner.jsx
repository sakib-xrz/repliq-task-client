import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";

const BannerImages = [banner1, banner2, banner3, banner4, banner5, banner6];

const Banner = () => {
    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
        >
            {BannerImages.map((banner, index) => (
                <div key={index}>
                    <img src={banner} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
