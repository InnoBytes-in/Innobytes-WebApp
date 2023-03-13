import React from "react";
import bg from "../assets/Tabs/Life Sciences bg.jpeg";
import cr from "../assets/Tabs/carousel.jpeg";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";

const Cloud = ({ tabCatagory, tabName, index }) => {
  return (
    <>
      {/* Top Section */}
      <div className="container h-[500px] ">
        <img src={bg} className="object-none h-full w-full" />
        <div className="flex absolute z-0 bg-slate-200 w-96 h-60 top-96 left-32 justify-center items-center rounded-md opacity-70">
          <h1 className="text-4xl font-bold">Life Sciences </h1>
        </div>
        <div className="flex justify-end">
          <FaLinkedin size="2rem" />
          <FaFacebookSquare size="2rem" />
          <FaTwitterSquare size="2rem" />
        </div>
      </div>

      {/* P1 and P2 Section */}
      <div className="flex flex-col">
        <p className="my-28 text-3xl text-center w-full px-28 font-bold font-serif">
          We at Innobytes are committed to guiding our life science clients
          through the intricate and quickly changing business environment
        </p>
        <p className="mb-20 text-3xl text-center w-full px-28 font-serif">
          Our team of professionals is prepared to offer strategic consulting
          services catered to the requirements of each specific client thanks to
          years of expertise and a strong grasp of the distinctive issues faced
          by life science enterprises.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center justify-center my-14">
        <GrPrevious size="2rem" className="mr-10" />

        <div className="flex h-80 items-center justify-center w-3/4 transition ease-in-out hover:scale-105">
          <img src={cr} className="relative object-none h-full w-[700px]" />
          <p className="relative text-2xl w-80 h-full px-10 bg-slate-100 font-serif ">
            <h1 className="text-4xl my-7">Heading</h1>
            <p className="my-7">
              Innobytes for life sciences shorter duration to care at a level
            </p>
            <a href="" className="text-blue-700 hover:underline">
              Read more
            </a>
          </p>
        </div>
        <GrNext size="2rem" className="ml-10" />
      </div>

      {/* P3 Section */}
      <div className="flex flex-col my-32">
        <p className="mb-20 text-3xl text-center w-full px-28 font-serif">
          We provide expert consulting services to life science clients, helping
          them achieve their business goals through customized solutions
        </p>
      </div>

      {/* What We Do Section */}
      <div className="">
        <h1 className="mb-5 text-4xl font-bold w-fit mx-28 font-serif">
          What We Do
        </h1>
        <ul className="list-disc text-3xl w-full px-48 font-serif">
          <li className="w-full my-5 py-5 border-b-2 border-black">
            Intelligent research and development
          </li>
          <li className="w-full my-5 py-5 border-b-2 border-black">
            Intelligent enterprise
          </li>
          <li className="w-full my-5 py-5 border-b-2 border-black">
            Intelligent engagement
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cloud;
