import React from "react";
import background from "../assets/HomeBackground.jpg";

const Home = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-stone-400 via-stone-800 to-stone-900">
        <div className="mt-40 my-7 space-y-6">
        <p className="text-6xl px-7 ">We are focused on Innovation in products and services we give</p>
        <p className="text-2xl px-7">We are a Team of IITs and IIMs come together to take up challenges in various fields and solve them by the extreme knowledge we posses</p>
        </div>
        
        <img className="mx-auto mr-0 object-none object-right-top mix-blend-screen" src={background} alt="" />
      </div>
    </>
  );
};

export default Home;
