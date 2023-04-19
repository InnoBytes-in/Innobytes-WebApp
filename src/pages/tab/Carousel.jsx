import React from "react";
import cr1 from "../../assets/Tabs/carousel1.jpg";
import cr2 from "../../assets/Tabs/carousel2.jpg";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { industryCarousel } from "../../data/IndustryCarousel";
import { servicesCarousel } from "../../data/ServicesCarousel";

const Carousel = ({ tab, tabCatagory }) => {
  const [carouselIndex, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const variants = {
    initial: (direction) => {
      return {
        x: direction * 1000,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stifness: "300", damping: "30" },
      },
    },
    exit: (direction) => {
      return {
        x: direction * -1000,
        opacity: 0,
      };
    },
  };

  let carousel =
    tabCatagory == "services" ? servicesCarousel : industryCarousel;
  // let carousel = [
  //   {
  //     id: 1,
  //     heading: "Lorem ipsum dolor sit amet.",
  //     p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eos expedita officiis, possimus ipsum iure iusto magni, delectus nesciunt rerum earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius labore laudantium rem deleniti aliquam aut eveniet cupiditate magni sed a, at earum sit impedit quae architecto deserunt placeat atque. perferendis eveniet doloremque voluptates blanditiis natus id at ipsa?",
  //   },
  //   {
  //     id: 2,
  //     heading: "Lorem ipsum dolor sit amet.",
  //     p: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius labore laudantium rem deleniti aliquam aut eveniet cupiditate magni sed a, at earum sit impedit quae architecto deserunt placeat atque.consectetur, adipisicing elit. Modi eos expedita officiis, possimus ipsum iure iusto magni, delectus nesciunt rerum earum perferendis eveniet doloremque voluptates blanditiis natus id at ipsa?",
  //   },
  // ];

  let nextIndex = () => {
    setDirection(1);
    setIndex((carouselIndex + 1) % tab.carousel.length);
  };

  let prevIndex = () => {
    setDirection(-1);
    let ind = carouselIndex === 0 ? tab.carousel.length - 1 : carouselIndex - 1;
    setIndex(ind);
  };

  // let cr = [cr1, cr2];
  return (
    <div>
      <div
        className="flex items-center pt-40 pb-4 px-20"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="flex-grow h-px bg-rose-500"></div>
        <span className="flex-shrink text-3xl px-4 font-medium font-serif">
          Articles
        </span>
        <div className="flex-grow h-px bg-rose-500"></div>
      </div>
      <div
        className="relative my-14 mt-16 w-full"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <AnimatePresence initial={false}>
          <div className="relative w-full h-96 bg-white ">
            <div className="overflow-hidden h-full w-full">
              <motion.img
                src={carousel[tab.carousel[carouselIndex]].bg}
                className="relative object-cover h-full w-full "
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                key={tab.carousel[carouselIndex]}
                custom={direction}
              />
            </div>
            <motion.div
              className="absolute bg-white shadow-md text-2xl top-14 left-5 w-1/2 h-fit  px-10 font-serif"
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              key={tab.carousel[carouselIndex]}
              custom={direction}
            >
              <h1 className="text-6xl mt-5">
                {carousel[tab.carousel[carouselIndex]].heading}
              </h1>
              <div className="flex items-center justify-end w-20 py-4">
                <div className="flex-grow h-1 bg-rose-500"></div>
              </div>
              <p className="mt-7 text-base text-justify h-24 overflow-hidden ">
                {carousel[tab.carousel[carouselIndex]].p1}
              </p>
              <div className="flex justify-end py-5">
                <button className="text-lg text-rose-500 border-2 border-transparent underline p-1 transition duration-500 ease-in-out hover:bg-rose-500 hover:text-white hover:no-underline">
                  Read more
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
        <div className="absolute bg-white rounded-full p-3 w-fit flex right-1/3 bottom-6">
          <GrPrevious
            size="2rem"
            className="cursor-pointer transition duration-500 ease-in-out hover:scale-125"
            onClick={prevIndex}
          />
          <div className="flex items-center justify-center px-2 space-x-2">
            {tab.carousel.map((_, i) => {
              return i === carouselIndex ? (
                <BsCircleFill key={i} size="1rem" />
              ) : (
                <BsCircle key={i} size="1rem" />
              );
            })}
          </div>
          <GrNext
            size="2rem"
            className="cursor-pointer transition duration-500 ease-in-out hover:scale-125"
            onClick={nextIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
