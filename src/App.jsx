import React from 'react';
import Navbar from './components/common/Navbar/main.jsx';
import './App.css';
import './components/common/Navbar/navbar.module.css';
import SectionTwo from './components/features/Section-Two/main.jsx';
import SectionOne from './components/features/Section-One/main.jsx';
import SectionThree from './components/features/Section-Three/main.jsx';
import Footer from './components/common/Footer/main.jsx';

const App = () => {


  return (
    <>
      <Navbar />
        <div className='container'>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      <Footer />
    </>
  )
}

export default App;
