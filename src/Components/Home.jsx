import React from "react";
import background from "../assets/Home-Bg.jpeg";
import aspirations from "../assets/company-aspirations.jpeg";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";

const Home = () => {
  return (
    <>
      {/* Top Section */}
      <div className="container h-[700px]">
        <img className="object-cover h-full w-full " src={background} alt="" />
        <div className="absolute top-96 left-28 w-1/2 bg-neutral-200 opacity-80 drop-shadow-md font-serif">
          <p className="text-5xl px-7 my-10">
            We are focused on Innovation in products and services we give
          </p>
          <p className="text-2xl px-7 pb-10">
            We are a Team of IITs and IIMs come together to take up challenges
            in various fields and solve them by the extreme knowledge we posses
          </p>
        </div>
      </div>

      {/* Company Aspirations blog */}
      <div className="flex h-auto w-full mt-10">
        <div className="w-1/2 ml-40 mr-16 my-10 font-serif">
          <h1 className="text-3xl font-medium pb-5 border-b-4 border-slate-500">
            Informative blog about some aspiration or maybe company's recent
            success
          </h1>
          <p className="text-xl pt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            labore. Voluptatibus illo sint quasi mollitia similique non tenetur
            quisquam debitis. Commodi, ea. Officia minus quae corporis pariatur
            repudiandae atque voluptas, distinctio eveniet a modi nobis rerum
            aut repellendus earum ipsum consequuntur sed dolor quo inventore!
            Nisi distinctio quod tempore doloribus.
          </p>
          <div className="flex justify-start py-5">
            <button className="text-lg text-slate-500 border-2 border-slate-500 p-1 hover:bg-slate-500 hover:text-white">
              Read more
            </button>
          </div>
        </div>
        <div className="w-96 h-[330px] my-10 border-2">
          <img src={aspirations} alt="" className="object-cover h-full" />
        </div>
      </div>

      {/* Insights Section */}
      <div className="my-10">
        <h1 className="text-3xl text-center font-serif">Our latest Insights</h1>
        <div className="flex w-full items-center justify-center my-7 divide-x-4 divide-slate-500">
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
