import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mt-28 h-80 font-serif" data-aos="fade-up">
        <div className="flex items-center py-4 px-10">
          <div className="flex-grow h-px bg-rose-500"></div>
        </div>
        <div className="flex h-2/3 mt-10 bg-gray-700 text-white">
          <div className="w-3/5 px-10 py-10">
            <h1 className="text-4xl">Follow Innobytes</h1>
            <div className="flex py-7 space-x-5">
              <FaLinkedin size="3rem" />
              <FaFacebookSquare size="3rem" />
              <FaTwitterSquare size="3rem" />
            </div>
            <div className="flex pb-14">
              <FaRegCopyright />
              <p className="ml-2 text-xs w-1/3">
                2023 Innobytess, All Rights Reserved.
              </p>
              <div className="flex w-2/3 text-sm space-x-5 justify-end pr-5">
                <a href="">Privacy Policy</a>
                <a href="">Terms and Conditions</a>
                <a href="">Contact us</a>
                <a href="">About us</a>
              </div>
            </div>
          </div>
          <div className="flex items-center py-8">
            <div className="flex-grow w-px h-full bg-black"></div>
          </div>
          <div className="flex flex-col w-2/5 px-10 py-8 items-center">
            <h1 className="text-4xl text-center pb-5">Newsletter</h1>
            <input
              className="border-b-2 border-black bg-gray-700 text-white w-1/2 py-2 px-3 focus:outline-none focus:shadow-outline focus:border-rose-500"
              type="text"
              placeholder="Please enter your email address"
            />
            <div className="flex w-1/2 place-items-start">
              <button className="text-base text-white underline underline-offset-4 p-1 mt-2 transition duration-500 ease-in-out hover:bg-rose-500 hover:no-underline ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-3 bg-gray-100">
          <a className="text-center text-black text-lg hover:underline cursor-pointer">
            Back To Top
          </a>
        </div>
        <div className="flex items-center py-4 bg-gray-100 px-10">
          <div className="flex-grow h-px bg-rose-500"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
