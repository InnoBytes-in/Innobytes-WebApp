import React, { useRef } from "react";
import TabTop from "./TabTop";
import ParagraphSection from "./ParagraphSection";
import Carousel from "./Carousel";
import WhatWeDo from "./WhatWeDo";
import ContactUs from "../../components/ContactUs";

const Cloud = ({ tabCatagory, tab, index }) => {
  const contactRef = useRef(null);

  return (
    <div className="bg-gray-100">
      {/* Top Section */}
      <TabTop tab={tab} contactRef={contactRef} />

      {/* Paragraph Section */}
      <ParagraphSection tab={tab} />

      {/* Carousel Section */}
      <Carousel tab={tab} />

      {/* What We Do Section */}
      <WhatWeDo tab={tab} />

      {/* Work With Innobytes Section */}
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Cloud;
