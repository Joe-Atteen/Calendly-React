import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Teams from "./components/Teams";
import Enterprise from "./components/Enterprise";
import Navbar from "./components/Navbar";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </Router>
  );
};

export default Routers;
