import React from "react";
import Navbar from "./layouts/header/Navbar";
import Footer from "./layouts/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import PageContainer from "./layouts/PageContainer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="bg-gray-100 max-h-max">
      <ScrollToTop />

      <Navbar />

      <PageContainer />

      <Footer />
    </div>
  );
}

export default App;
