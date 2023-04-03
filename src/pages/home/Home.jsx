import React from "react";
import TopHome from "./TopHome";
import LatestInsights from "./LatestInsights";
import ComanyAspirations from "./ComanyAspirations";
import OurServices from "./OurServices";
import ContactUs from "../../components/ContactUs";

const Home = () => {
  return (
    <>
      <TopHome />

      <LatestInsights />

      <ComanyAspirations />

      <OurServices />

      <ContactUs />
    </>
  );
};

export default Home;
