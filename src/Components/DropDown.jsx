import React from "react";
import { Link } from "react-router-dom";
import { industries } from "./Data/IndustriesData";
import { insights } from "./Data/InsightsData";
import { services } from "./Data/ServicesData";

const DropDown = ({ items }) => {
  let dropDownItems = [];
  if (items === "industries") dropDownItems = industries;
  else if (items === "services") dropDownItems = services;
  else if (items === "insights") dropDownItems = insights;

  return (
    <>
      <div className="grid grid-cols-4 w-1/2 absolute z-10 bg-white ml-14 rounded-b-md drop-shadow-md">
        {dropDownItems != undefined
          ? dropDownItems.map((item, index) => (
              <h4
                key={index}
                className=" my-4 mx-8 cursor-pointer hover:text-blue-500"
              >
                <Link to={"/" + items + "/" + item.name}>{item.name}</Link>
              </h4>
            ))
          : ""}
      </div>
    </>
  );
};

export default DropDown;
