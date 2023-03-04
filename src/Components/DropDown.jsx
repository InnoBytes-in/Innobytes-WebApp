import React from "react";
import { Link } from "react-router-dom";
import { dropDowntypes } from "./NavBarData";

const DropDown = ({ items }) => {
  // console.log(dropDowntypes[items]);
  return (
    <>
      <div className="grid grid-cols-4 w-1/2 absolute bg-stone-300  ml-14 rounded-b-md">
        {dropDowntypes[items] != undefined
          ? dropDowntypes[items].map((item, index) => (
              <h4
                key={index}
                className=" my-4 mx-8 cursor-pointer hover:text-blue-900 hover:underline"
              >
                <Link to={"/" + items + "/" + item}>{item}</Link>
              </h4>
            ))
          : ""}
      </div>
    </>
  );
};

export default DropDown;
