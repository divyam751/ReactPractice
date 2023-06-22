// I B RR L
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Project' element={<Project />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
};
export default AllRoutes;
