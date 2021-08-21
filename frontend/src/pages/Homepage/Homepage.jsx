import React from "react";

// Components
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Sounds from "../../components/Sounds/Sounds";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Features />
      <Sounds />
      <Footer />
    </div>
  );
};

export default Homepage;
