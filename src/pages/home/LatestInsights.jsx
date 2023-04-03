import React from "react";
import insight1 from "../../assets/insight1.jpg";
import insight2 from "../../assets/insight2.jpg";

const LatestInsights = () => {
  return (
    <>
      <div className="my-10">
        <div
          className="flex items-center mt-40 pb-10 px-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex-grow h-px bg-rose-400"></div>
          <span className="flex-shrink text-3xl px-4 font-medium font-serif">
            Our Latest Insights
          </span>
          <div className="flex-grow h-px bg-rose-400"></div>
        </div>
        <div className="flex w-full items-center justify-center my-7 space-x-5">
          <div
            className="h-auto w-2/5 px-10 pt-5 bg-white drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className="overflow-hidden">
              <img
                src={insight1}
                alt=""
                className="object-cover transition duration-500 ease-in-out hover:scale-125"
              />
            </div>
            <h1
              className="text-3xl text-center font-medium font-serif my-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit.
            </h1>
            <p
              className="text-base font-light font-serif pb-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quasi, id nam pariatur provident facere. Rem delectus accusantium
              nostrum consectetur.
            </p>
          </div>
          <div
            className="h-auto w-2/5 px-10 pt-5 bg-white drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className="overflow-hidden">
              <img
                src={insight2}
                alt=""
                className="object-contain transition duration-500 ease-in-out hover:scale-125"
              />
            </div>
            <h1
              className="text-3xl text-center font-medium font-serif my-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit.
            </h1>
            <p
              className="text-base font-light font-serif pb-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quasi, id nam pariatur provident facere. Rem delectus accusantium
              nostrum consectetur.
            </p>
          </div>
        </div>
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <button className="text-xl border-2 border-gray-100 text-rose-500 underline underline-offset-4 p-1 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-black hover:border-rose-500 hover:drop-shadow-xl">
            See all Insights
          </button>
        </div>
        <div
          className="flex items-center pt-10 px-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex-grow h-px bg-rose-400"></div>
        </div>
      </div>
    </>
  );
};

export default LatestInsights;
