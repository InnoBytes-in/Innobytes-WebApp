import React from "react";
import { Link } from "react-router-dom";
import { industries } from "../../data/IndustriesData";
import { services } from "../../data/ServicesData";
import { insights } from "../../data/InsightsData";

const DropDown = ({ items }) => {
  let dropDownItems = [];
  if (items === "industries") dropDownItems = industries;
  else if (items === "services") dropDownItems = services;
  else if (items === "insights") dropDownItems = insights;

  return (
    <>
      <div className="w-full absolute z-10 text-white bg-cyan-700 rounded-b-md drop-shadow-md">
        <div className="grid grid-cols-4 w-2/3 ml-12">
          {dropDownItems != undefined
            ? dropDownItems.map((item, index) => (
                <h4
                  key={index}
                  className=" my-4 mx-8 cursor-pointer hover:text-rose-400"
                >
                  <Link to={"/" + items + "/" + item.name}>{item.name}</Link>
                </h4>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default DropDown;
