import React from "react";
import Navbar from "./components/common/Navbar/index.jsx";
import "./App.css";
import "./components/common/Navbar/navbar.module.css";
import SectionTwo from "./components/features/Section-Two/index.jsx";
import SectionOne from "./components/features/Section-One/index.jsx";
import SectionThree from "./components/features/Section-Three/index.jsx";
import AwaisComponent from "./components/features/Awais Components/index.jsx";
import { SectionSeven } from "./components/features/Zain code/Section-Seven.jsx";
import Footer from "./components/common/Footer/main.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
        <AwaisComponent />
        <SectionSeven />
      </div>
      <Footer />
    </>
  );
};

export default App;
