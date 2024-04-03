import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Test from "./Pages/Test";
import Blogs from "./Layout/Blogs";
import Popular from "./Layout/Popular";
import Activities from "./Pages/Activities";
import AutoPlay from "./Pages/Autoplay";
import TripTypes from "./Pages/TripTypes";
import BlogDetail from "./Layout/BlogDetail";
import BlogDetaill from "./Layout/BlogDetaill";
import BlogDetailll from "./Layout/BlogDetailll";
import Contact from "./Layout/Contact";
// import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Modal from "./components/Modal";
import Gallery from "./Pages/Gallery";
import Details from "./Pages/Details";
import Packages from "./Pages/Packages";
import ImageSlider from "./components/ImageSlider";


const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
            <Route path="/blogdetaill" element={<BlogDetaill />} />
            <Route path="/blogdetailll" element={<BlogDetailll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/autoplay" element={<AutoPlay />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/activity" element={<Activities />} />
            <Route path="/triptypes" element={<TripTypes />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/modal" element={<Modal />} />
            <Route path="/details" element={<Details/>}/>
            <Route path="/packages" element={<Packages/>}/>
            {/* <Route path="/slider" element={<ImageSlider/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
