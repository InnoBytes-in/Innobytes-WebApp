import React from "react";

const WhatWeDo = ({ tab }) => {
  return (
    <>
      <div
        className="flex items-center mt-40 pb-16 px-20"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
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
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <h1 className="text-3xl text-center px-7 font-serif">{item}</h1>
          </div>
        ))}
      </div>
      <div
        className="flex items-center pt-16 px-20"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="flex-grow h-px bg-rose-400"></div>
      </div>
    </>
  );
};

export default WhatWeDo;
