import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Homepage from './homepage';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Contact from './Contact';
import "./index.css";

function App() {
  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
