import React from "react";
import background from "../assets/HomeBackground.jpg";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";

const Home = () => {
  return (
    <>
      {/* Top Section */}
      <div className="flex bg-gradient-to-r from-stone-400 via-stone-800 to-stone-900">
        <div className="mt-40 my-7 space-y-6">
          <p className="text-6xl px-7 ">
            We are focused on Innovation in products and services we give
          </p>
          <p className="text-2xl px-7">
            We are a Team of IITs and IIMs come together to take up challenges
            in various fields and solve them by the extreme knowledge we posses
          </p>
        </div>

        <img
          className="mx-auto mr-0 object-none object-right-top mix-blend-screen"
          src={background}
          alt=""
        />
      </div>

      {/* Insights Section */}
      <div className="my-20">
        <h1 className="text-3xl text-center font-serif">Our latest Insights</h1>
        <div className="flex w-full items-center justify-center my-7 divide-x-4">
          <div className="h-auto w-2/5 px-10">
            <img src={insight1} alt="" className="object-contain" />
            <h1 className="text-3xl text-center font-medium font-serif my-4">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-base font-light font-serif pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quasi, id nam pariatur provident facere. Rem delectus accusantium
              nostrum consectetur.
            </p>
          </div>
          <div className="h-auto w-2/5 px-10">
            <img src={insight2} alt="" className="object-contain" />
            <h1 className="text-3xl text-center font-medium font-serif my-4">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-base font-light font-serif pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quasi, id nam pariatur provident facere. Rem delectus accusantium
              nostrum consectetur.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-xl text-slate-500 border-2 border-slate-500 p-3 hover:bg-slate-500 hover:text-white">
            See all Insights
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
