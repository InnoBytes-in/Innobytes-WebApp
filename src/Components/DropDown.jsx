import React from "react";

const DropDown = (props) => {
  // console.log(props.dropDownItems);
  return (
    <>
      <div className="grid grid-cols-4 w-fit absolute bg-white ml-14 rounded-b-md">
      {props.items.map((item, index) => (
        <h4 key={index} className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
            {item}
          </h4>
      ))}
        
        {/* <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Communications and Media
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Health
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Life Sciences
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Software and Platforms
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Banking
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Consumer Goods and Services
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          High Tech
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Natural Resources
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Travel
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Capital Markets
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Energy
        </h4>
        <h4 className=" my-4 mx-8 cursor-pointer hover:text-blue-500">
          Industrial Equipment
        </h4> */}
      </div>
    </>
  );
};

export default DropDown;
