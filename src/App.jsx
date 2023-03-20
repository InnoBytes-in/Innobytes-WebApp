import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Tab from "./Components/Tab";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { industries } from "./Components/Data/IndustriesData";
import { insights } from "./Components/Data/InsightsData";
import { services } from "./Components/Data/ServicesData";

function App() {
  // const [count, setCount] = useState(0);
  // console.log(window.location);
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
