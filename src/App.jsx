import Navbar from "./Navbar.jsx";
import Homepage from "./homepage.jsx";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
