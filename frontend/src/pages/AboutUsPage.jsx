import React from "react";
import { AboutUs } from "../components/AboutUs";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const AboutUsPage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
