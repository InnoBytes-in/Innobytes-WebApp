import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Tab from "./Components/Tab";
import { Route, Routes } from "react-router-dom";
import { dropDowntypes } from "./Components/Data/NavBarData";

function App() {
  const [count, setCount] = useState(0);
  // console.log(window.location);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {dropDowntypes.insights.map((item, index) => (
          <Route
            key={index}
            path={"/insights/" + item}
            element={
              <Tab tabCatagory="insights" tabName={item} index={index} />
            }
          />
        ))}
        {dropDowntypes.industries.map((item, index) => (
          <Route
            key={index}
            path={"/industries/" + item}
            element={
              <Tab tabCatagory="industries" tabName={item} index={index} />
            }
          />
        ))}
        {dropDowntypes.services.map((item, index) => (
          <Route
            key={index}
            path={"/services/" + item}
            element={
              <Tab tabCatagory="services" tabName={item} index={index} />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
