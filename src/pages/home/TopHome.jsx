import React from "react";

const TopHome = () => {
  const background = "./Home Bg.jpeg";
  return (
    <>
      <div className="container h-screen bg-cyan-700">
        <img
          className="object-cover h-full w-full saturate-150 opacity-60"
          src={background}
          alt=""
        />
        <div className="absolute bottom-16 right-28 w-1/2 text-black font-serif z-0">
          <p
            className="text-6xl font-bold px-4"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            We are focused on Innovation in products and services we give
          </p>
          <div
            className="flex items-center py-4 pl-5 pr-20"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className="flex-grow h-1 bg-rose-500"></div>
          </div>
          <p
            className="text-xl px-7 pb-10"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            We are a Team of IITs and IIMs come together to take up challenges
            in various fields and solve them by the extreme knowledge we posses
          </p>
        </div>
      </div>
    </>
  );
};

export default TopHome;
