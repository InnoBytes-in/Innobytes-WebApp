import React, { useRef } from "react";
import bg from "../assets/Tabs/Life Sciences bg.jpeg";
import cr1 from "../assets/Tabs/carousel1.jpg";
import cr2 from "../assets/Tabs/carousel2.jpg";
import contact from "../assets/ContactUs-home.jpg";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaArrowRight,
} from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Cloud = ({ tabCatagory, tab, index }) => {
  // const background = "./Home Bg.jpeg";
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

  const contactRef = useRef(null);

  return (
    <div className="bg-gray-100">
      {/* Top Section */}
      <div className="container h-screen bg-cyan-700">
        <img src={tab.bg} className="object-cover h-full w-full opacity-60" />
        <div className="absolute z-0 bottom-24 right-32 justify-center items-center">
          <h1
            className="text-6xl text-white font-bold px-14"
            style={{
              WebkitTextStroke: "1px black",
              MozTextStroke: "1px black",
              textStroke: "1px black",
            }}
            data-aos="zoom-in"
          >
            {tab.name}
          </h1>
          <div className="flex items-center py-4 px-5" data-aos="zoom-in">
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <div
            className="flex justify-end items-center py-5 px-5"
            data-aos="zoom-in"
          >
            <div className="flex w-fit border-2 text-rose-500 border-white bg-white p-1 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-white hover:border-rose-500">
              <button
                onClick={() => {
                  if (contactRef && contactRef.current) {
                    contactRef.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-2xl px-3 font-medium"
              >
                Get in touch
              </button>
              <FaArrowRight size="2rem" className="mt-1" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <FaLinkedin size="4rem" />
          <FaFacebookSquare size="4rem" />
          <FaTwitterSquare size="4rem" />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="flex mt-28 w-full justify-center items-center">
        <div className="w-4/6">
          <h1 className="text-5xl text-justify font-bold font-serif">
            About Us
          </h1>
          <div className="flex items-center w-20 py-4" data-aos="fade-up">
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <p
            className="mt-5 text-2xl text-justify font-serif "
            data-aos="fade-up"
          >
            {tab.p1}
          </p>
          <p
            className="mt-5 text-2xl text-justify font-serif"
            data-aos="fade-up"
          >
            {tab.p2}
          </p>
          <p
            className="my-5 text-2xl text-justify font-serif"
            data-aos="fade-up"
          >
            {tab.p3}
          </p>
          <div
            className="flex items-center justify-end w-20 py-4"
            data-aos="fade-up"
          >
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center pt-40 pb-4 px-20" data-aos="fade-up">
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

      {/* What We Do Section */}
      <div>
        <div className="flex items-center mt-40 pb-16 px-20" data-aos="fade-up">
          <div className="flex-grow h-px bg-rose-400"></div>
          <span className="flex-shrink text-3xl px-4 font-medium font-serif">
            What we do
          </span>
          <div className="flex-grow h-px bg-rose-400"></div>
        </div>

        <div className="grid grid-cols-2 place-items-center mx-7">
          {tab.whatwedo.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-1/2 h-56 my-10 bg-white border-x-8 border-rose-500 drop-shadow-lg transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
              data-aos="fade-up"
            >
              <h1 className="text-3xl text-center px-7 font-serif">{item}</h1>
            </div>
          ))}
        </div>
        <div className="flex items-center pt-16 px-20" data-aos="fade-up">
          <div className="flex-grow h-px bg-rose-400"></div>
        </div>
      </div>

      {/* Work With Innobytes Section */}
      <div
        ref={contactRef}
        className="relative w-full h-[700px] mt-28 justify-center"
      >
        <img
          src={contact}
          alt=""
          className="static object-cover h-full w-full "
          data-aos="fade-up"
        />
        <div className="absolute flex w-full h-full top-5 justify-between items-center">
          <div
            className="w-1/3 bg-cyan-700 ml-28 shadow-gray-500 shadow-xl"
            data-aos="fade-up"
          >
            <h1 className="text-4xl text-center font-serif font-semibold px-5 pt-5 text-white">
              Do you want to seek InnoBytes's assistance in helping you resolve
              some critical business issues?
            </h1>
            <div className="flex items-center py-4 px-20">
              <div className="flex-grow h-1 bg-rose-500"></div>
            </div>
          </div>
          <form
            action=""
            className="w-1/3 max-h-max mr-28 px-10 mb-3 items-center bg-white shadow-gray-500 shadow-xl"
            data-aos="fade-up"
          >
            <h1 className="text-2xl font-serif py-5">Name</h1>
            <input
              type="text"
              placeholder="Enter your Name"
              className="py-3 px-24 border-2 rounded-md border-rose-500 focus:border-cyan-700"
            />
            <h1 className="text-2xl font-serif py-5">E-Mail</h1>
            <input
              type="text"
              placeholder="Enter your Email"
              className="py-3 px-24 border-2 rounded-md border-rose-500 focus:border-cyan-700"
            />
            <h1 className="text-2xl font-serif py-5">Message</h1>
            <input
              type="text"
              placeholder="Write Message"
              className="py-16 px-24 mb-6 border-2 rounded-md border-rose-500 focus:border-cyan-700"
            />
            <div className="flex justify-start py-5">
              <button className="text-xl  border-2 border-transparent text-rose-500 p-1 underline underline-offset-4 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-white hover:border-rose-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
