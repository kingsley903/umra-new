import React from "react";

import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/Frame1section";
import Frame6 from "./components/Frame6section";
import Frame7 from "./components/Frame7";
import Frame8 from "./components/Frame8";
import Frame9 from "./components/Frame9";
import Frame10 from "./components/Frame10";
import FAQSection from "./components/Frame11";
import Frame12 from "./components/Frame12";
import Footer from "./components/Frame13";
import Reviews from "./components/Reviews";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Reviews />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <FAQSection />
      <Frame12 />
      <Footer />
    </div>
  );
}

export default App;
