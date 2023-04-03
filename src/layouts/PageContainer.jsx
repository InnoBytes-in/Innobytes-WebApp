import React from "react";
import { Route, Routes } from "react-router-dom";
import { industries } from "../data/IndustriesData";
import { services } from "../data/ServicesData";
import { insights } from "../data/InsightsData";
import Home from "../pages/home/Home";
import Tab from "../pages/tab/Tab";

const PageContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {insights.map((item, index) => (
        <Route
          key={index}
          path={"/insights/" + item.name}
          element={<Tab tabCatagory="insights" tab={item} index={index} />}
        />
      ))}
      {industries.map((item, index) => (
        <Route
          key={index}
          path={"/industries/" + item.name}
          element={<Tab tabCatagory="industries" tab={item} index={index} />}
        />
      ))}
      {services.map((item, index) => (
        <Route
          key={index}
          path={"/services/" + item.name}
          element={<Tab tabCatagory="services" tab={item} index={index} />}
        />
      ))}
    </Routes>
  );
};

export default PageContainer;
