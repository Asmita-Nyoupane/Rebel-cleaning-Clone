import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
