import React from "react";
import Contact_Us from "../components/Contact_Us";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const Contact_Us_Page = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Contact_Us />
      <Footer />
    </div>
  );
};

export default Contact_Us_Page;
