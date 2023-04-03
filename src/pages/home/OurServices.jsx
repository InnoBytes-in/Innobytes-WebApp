import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbFileChart } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";

const OurServices = () => {
  return (
    <div>
      <div
        className="flex items-center mt-40 pb-16 px-20"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="flex-grow h-px bg-rose-400"></div>
        <span className="flex-shrink text-3xl px-4 font-medium font-serif">
          Our Best Services
        </span>
        <div className="flex-grow h-px bg-rose-400"></div>
      </div>

      <div className="flex justify-center space-x-10">
        <div
          className="w-1/4 h-1/2 bg-white drop-shadow-lg transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex justify-center py-10">
            <BsGraphUpArrow color="#F43F5E" size="4rem" />
          </div>
          <h1 className="text-3xl text-center my-5 font-serif">
            Strategy Planning
          </h1>
          <div className="flex items-center py-4 px-20">
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <p className="px-10 py-8 font-serif text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magnam qui sapiente vero non ipsa earum explicabo, saepe nisi
            tempora consectetur optio reprehenderit quisquam iusto amet et
            officia iste incidunt.
          </p>
        </div>
        <div
          className="w-1/4 h-1/2 bg-white drop-shadow-lg transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex justify-center py-10">
            <TbFileChart color="#F43F5E" size="4rem" />
          </div>
          <h1 className="text-3xl text-center my-5 font-serif">
            Insurance Service
          </h1>
          <div className="flex items-center py-4 px-20">
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <p className="px-10 py-8 font-serif text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magnam qui sapiente vero non ipsa earum explicabo, saepe nisi
            tempora consectetur optio reprehenderit quisquam iusto amet et
            officia iste incidunt.
          </p>
        </div>
        <div
          className="w-1/4 h-1/2 bg-white drop-shadow-lg transition duration-500 ease-in-out hover:bg-cyan-700 hover:text-white"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex justify-center py-10">
            <FaRegHandshake color="#F43F5E" size="4rem" />
          </div>
          <h1 className="text-3xl text-center my-5 font-serif">
            Audit Evaluation
          </h1>
          <div className="flex items-center py-4 px-20">
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <p className="px-10 py-8 font-serif text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magnam qui sapiente vero non ipsa earum explicabo, saepe nisi
            tempora consectetur optio reprehenderit quisquam iusto amet et
            officia iste incidunt.
          </p>
        </div>
      </div>
      <div
        className="flex items-center pt-16 px-20"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="flex-grow h-px bg-rose-400"></div>
      </div>
    </div>
  );
};

export default OurServices;
