import React from "react";
// import background from "../assets/Home-Bg.jpeg";
import aspirations from "../assets/company-aspirations.jpeg";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import contact from "../assets/ContactUs-home.jpg";
import { industries } from "./Data/IndustriesData";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbFileChart } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const background = "./Home Bg.jpeg";
  // const fun = async () => {
  //   const response = await fetch("http://localhost:8080/demo", {
  //     method: "GET",
  //   });
  //   const data = await response.text();
  //   console.log(data);
  // };

  // const fun2 = async () => {
  //   industries.map(async (item) => {
  //     const response = await fetch("http://localhost:8080/industries", {
  //       method: "POST",
  //       body: JSON.stringify(item),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   });
  // };

  return (
    <>
      {/* Top Section */}
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

      {/* Insights Section */}
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

      {/* Company Aspirations blog */}
      <div
        className="flex h-auto w-full mt-40 bg-cyan-700"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="w-1/2 ml-40 mr-16 my-16 font-serif">
          <h1
            className="text-5xl font-medium pb-5 border-b-4 border-rose-500"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            Informative blog about some aspiration or maybe company's recent
            success
          </h1>
          <p
            className="text-lg pt-10"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            labore. Voluptatibus illo sint quasi mollitia similique non tenetur
            quisquam debitis. Commodi, ea. Officia minus quae corporis pariatur
            repudiandae atque voluptas, distinctio eveniet a modi nobis rerum
            aut repellendus earum ipsum consequuntur sed dolor quo inventore!
            Nisi distinctio quod tempore doloribus.
          </p>
          <div
            className="flex justify-start py-5"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <button className="text-lg  border-2 border-cyan-700 text-rose-500 p-1 underline underline-offset-4 transition duration-500 ease-in-out hover:no-underline hover:bg-rose-500 hover:text-white hover:border-rose-500">
              Read more
            </button>
          </div>
        </div>
        <div
          className="w-96 h-[330px] my-16 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <img
            src={aspirations}
            alt=""
            className="object-cover h-full transition duration-500 ease-in-out hover:scale-125"
          />
        </div>
      </div>

      {/* Our Best Services */}

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

      {/* Work With Innobytes Section */}
      <div className="relative w-full h-[700px] mt-28 justify-center">
        <img
          src={contact}
          alt=""
          className="static object-cover h-full w-full "
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        />
        <div className="absolute flex w-full h-full top-5 justify-between items-center">
          <div
            className="w-1/3 bg-cyan-700 ml-28 shadow-black shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <h1 className="text-4xl text-center font-serif font-semibold px-5 pt-5 ">
              Do you want to seek InnoBytes's assistance in helping you resolve
              some critical business issues?
            </h1>
            <div className="flex items-center py-4 px-20">
              <div className="flex-grow h-1 bg-rose-500"></div>
            </div>
          </div>
          <form
            action=""
            className="w-1/3 max-h-max mr-28 px-10 mb-3 items-center bg-white shadow-black shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
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
    </>
  );
};

export default Home;
