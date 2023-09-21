import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img_1 from "./../../../Assests/img-1.jpeg";
import img_2 from "./../../../Assests/img-2.jpeg";
import img_3 from "./../../../Assests/img-3.jpeg";
import img_4 from "./../../../Assests/img-4.jpeg";

const Hero = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      transitionTime={500}
      swipeable={false}
      emulateTouch={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <AiOutlineLeft className="w-9 h-9 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <AiOutlineRight className="w-9 h-9 text-white" />
          </div>
        );
      }}
    >
      <div>
        <img src={img_1} style={{ height: "500px" }} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={img_2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={img_3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={img_4} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      {/* <div>
        <img src="https://odopmart.com/pub/media/magiccart/magicslider/o/d/odopbanner4.jpg" />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>

    // <div
    //   className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    //   style={{
    //     backgroundImage:
    //       "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    //   }}
    // >
    //   <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
    //     <h1
    //       className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
    //     >
    //       Best Collection for <br /> home Decoration
    //     </h1>
    //     <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
    //       assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
    //       quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
    //       <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
    //     </p>
    //     <Link to="/products" className="inline-block">
    //         <div className={`${styles.button} mt-5`}>
    //              <span className="text-[#fff] font-[Poppins] text-[18px]">
    //                 Shop Now
    //              </span>
    //         </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Hero;
