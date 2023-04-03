import React from "react";

const ParagraphSection = ({ tab }) => {
  return (
    <div className="flex mt-28 w-full justify-center items-center">
      <div className="w-4/6">
        <h1 className="text-5xl text-justify font-bold font-serif">About Us</h1>
        <div
          className="flex items-center w-20 py-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex-grow h-1 bg-rose-500"></div>
        </div>
        <p
          className="mt-5 text-2xl text-justify font-serif "
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          {tab.p1}
        </p>
        <p
          className="mt-5 text-2xl text-justify font-serif"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          {tab.p2}
        </p>
        <p
          className="my-5 text-2xl text-justify font-serif"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          {tab.p3}
        </p>
        <div
          className="flex items-center justify-end w-20 py-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <div className="flex-grow h-1 bg-rose-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ParagraphSection;
