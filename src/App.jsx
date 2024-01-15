import React from "react";
import Navbar from "./components/common/Navbar/main.jsx";
import "./App.css";
import "./components/common/Navbar/navbar.module.css";
import SectionTwo from "./components/features/Section-Two/main.jsx";
import SectionOne from "./components/features/Section-One/main.jsx";
import { SectionSeven } from "./components/features/Zain code/Section-Seven.jsx";
import AwaisComponent from "./components/features/Awais Components/index.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <AwaisComponent />
        <SectionSeven />
      </div>
    </>
  );
};

export default App;
