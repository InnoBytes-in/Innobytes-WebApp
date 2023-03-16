import React from "react";
import bg from "../assets/Tabs/Life Sciences bg.jpeg";
import cr1 from "../assets/Tabs/carousel1.jpg";
import cr2 from "../assets/Tabs/carousel2.jpg";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Cloud = ({ tabCatagory, tab, index }) => {
  const [carouselIndex, setIndex] = useState(0);

  let nextIndex = () => {
    setIndex((carouselIndex + 1) % tab.carousel.length);
  };

  let prevIndex = () => {
    let ind = carouselIndex === 0 ? tab.carousel.length - 1 : carouselIndex - 1;
    setIndex(ind);
  };

  let cr = [cr1, cr2];

  return (
    <>
      {/* Top Section */}
      <div className="container h-[700px] ">
        <img src={bg} className="object-cover h-full w-full" />
        <div className="flex absolute z-0 bg-slate-200 w-96 h-60 bottom-0 left-32 justify-center items-center rounded-md opacity-70 drop-shadow-lg">
          <h1 className="text-4xl font-bold px-14">{tab.name}</h1>
        </div>
        <div className="flex justify-end">
          <FaLinkedin size="2rem" />
          <FaFacebookSquare size="2rem" />
          <FaTwitterSquare size="2rem" />
        </div>
      </div>

      {/* P1 and P2 Section */}
      <div className="flex flex-col justify-center items-center">
        <p className="w-2/3 mt-24 mb-10 text-3xl text-justify font-bold font-serif ">
          {tab.p1}
        </p>
        <p className=" text-2xl text-justify w-2/3 font-serif">{tab.p2}</p>
      </div>

      {/* P3 Section */}
      <div className="flex flex-col justify-center items-center mt-5">
        <p className="mb-20 text-2xl text-justify w-2/3 font-serif">{tab.p3}</p>
      </div>

      {/* Carousel Section */}
      <div class="flex items-center py-4 px-20">
        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-3xl px-4 font-medium font-serif">
          Articles
        </span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="flex items-center justify-center my-14">
        <GrPrevious
          size="2rem"
          className="mr-10 cursor-pointer transition duration-500 ease-in-out hover:scale-125"
          onClick={prevIndex}
        />

        <div className="grid grid-cols-2 h-96 items-center justify-center w-3/4">
          <div className="overflow-hidden h-full w-full">
            <img
              src={cr[carouselIndex]}
              className="relative object-cover h-full w-full transition duration-500 ease-in-out hover:scale-125"
            />
          </div>
          <div className="relative text-2xl w-full h-full px-10 font-serif border-y-[1px] border-r-[1px] border-slate-500">
            <h1 className="text-4xl my-7">
              {tab.carousel[carouselIndex].heading}{" "}
              {tab.carousel[carouselIndex].id}
            </h1>
            <p className="my-7">{tab.carousel[carouselIndex].p}</p>
            <div className="flex absolute justify-end py-5 bottom-5">
              <button className="text-lg text-slate-500 border-2 border-slate-500 p-1 transition duration-500 ease-in-out hover:bg-slate-500 hover:text-white">
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

      {/* What We Do Section */}
      <div className="">
        <div class="flex items-center px-20 py-4">
          <div class="flex-grow h-px bg-gray-400"></div>
          <span class="flex-shrink text-3xl px-4 font-light font-serif">
            What we do
          </span>
          <div class="flex-grow h-px bg-gray-400"></div>
        </div>
        <ul className="list-disc text-2xl w-full px-48 font-serif">
          {tab.whatwedo.map((item, index) => (
            <li
              key={index}
              className="w-full my-5 py-5 border-b-2 border-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cloud;
