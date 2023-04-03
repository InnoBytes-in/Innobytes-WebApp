import React from "react";
import cr1 from "../../assets/Tabs/carousel1.jpg";
import cr2 from "../../assets/Tabs/carousel2.jpg";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Carousel = ({ tab }) => {
  const [carouselIndex, setIndex] = useState(0);

  let carousel = [
    {
      id: 1,
      heading: "Lorem ipsum dolor sit amet.",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eos expedita officiis, possimus ipsum iure iusto magni, delectus nesciunt rerum earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius labore laudantium rem deleniti aliquam aut eveniet cupiditate magni sed a, at earum sit impedit quae architecto deserunt placeat atque. perferendis eveniet doloremque voluptates blanditiis natus id at ipsa?",
    },
    {
      id: 2,
      heading: "Lorem ipsum dolor sit amet.",
      p: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius labore laudantium rem deleniti aliquam aut eveniet cupiditate magni sed a, at earum sit impedit quae architecto deserunt placeat atque.consectetur, adipisicing elit. Modi eos expedita officiis, possimus ipsum iure iusto magni, delectus nesciunt rerum earum perferendis eveniet doloremque voluptates blanditiis natus id at ipsa?",
    },
  ];

  let nextIndex = () => {
    setIndex((carouselIndex + 1) % carousel.length);
  };

  let prevIndex = () => {
    let ind = carouselIndex === 0 ? carousel.length - 1 : carouselIndex - 1;
    setIndex(ind);
  };

  let cr = [cr1, cr2];
  return (
    <>
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
      <div className="flex items-center justify-center my-14">
        <GrPrevious
          size="2rem"
          className="mr-10 cursor-pointer transition duration-500 ease-in-out hover:scale-125"
          onClick={prevIndex}
        />

        <div
          className="grid grid-cols-2 h-96 items-center justify-center w-3/4 bg-white shadow-lg shadow-gray-500"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="overflow-hidden h-full w-full">
            <img
              src={cr[carouselIndex]}
              className="relative object-cover h-full w-full transition duration-500 ease-in-out hover:scale-125"
            />
          </div>
          <div className="relative text-2xl w-full h-full px-10 font-serif border-y-[1px] border-r-[1px] border-slate-500">
            <h1 className="text-6xl mt-5">{carousel[carouselIndex].heading}</h1>
            <div className="flex items-center justify-end w-20 py-4">
              <div className="flex-grow h-1 bg-rose-500"></div>
            </div>
            <p className="my-7 text-base text-justify h-24 overflow-hidden ">
              {carousel[carouselIndex].p}
            </p>
            <div className="flex absolute justify-end py-5 bottom-5">
              <button className="text-lg text-rose-500 border-2 border-transparent underline p-1 transition duration-500 ease-in-out hover:bg-rose-500 hover:text-white hover:no-underline">
                Read more
              </button>
            </div>
          </div>
        </div>
        <GrNext
          size="2rem"
          className="ml-10 cursor-pointer transition duration-500 ease-in-out hover:scale-125"
          onClick={nextIndex}
        />
      </div>
    </>
  );
};

export default Carousel;
