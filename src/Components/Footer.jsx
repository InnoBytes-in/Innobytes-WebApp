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
      <div className="mt-40 h-80 font-serif">
        <div class="flex items-center py-4 px-10">
          <div class="flex-grow h-px bg-gray-400"></div>
        </div>
        <div className="flex h-2/3 mt-10 bg-neutral-300">
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
          <div class="flex items-center py-8">
            <div class="flex-grow w-px h-full bg-black"></div>
          </div>
          <div className="flex flex-col w-2/5 px-10 py-8 items-center">
            <h1 className="text-4xl text-center pb-5">Newsletter</h1>
            <input
              className="border-b-2 border-black bg-neutral-300 text-black w-1/2 py-2 px-3 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Please enter your email address"
            />
            <div className="flex w-1/2 place-items-start">
              <button className="text-base text-black p-1 transition duration-500 ease-in-out hover:text-slate-500 hover:underline underline-offset-4">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-3">
          <a className="text-center text-lg hover:underline underline-offset-8 cursor-pointer">
            Back To Top
          </a>
        </div>
        <div class="flex items-center py-4 px-10">
          <div class="flex-grow h-px bg-gray-400"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
