import React from "react";
import contact from "../assets/ContactUs-home.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;
