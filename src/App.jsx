import React from 'react';
import Navbar from './components/common/Navbar/main.jsx';
import './App.css';
import './components/common/Navbar/navbar.module.css';
import SectionTwo from './components/features/Section-Two/main.jsx';
import SectionOne from './components/features/Section-One/main.jsx';

const App = () => {
  return (
    <>
      <Navbar />
        <div className='container'>
          <SectionOne />
          <SectionTwo />
        </div>
      
    </>
  );
};

export default App;
