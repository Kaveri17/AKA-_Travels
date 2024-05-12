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
// import Modal from "./components/Modal";
import Gallery from "./Pages/Gallery";
import Details from "./Pages/Details";
import Packages from "./Pages/Packages";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Verify from "./Pages/Verify/Token";

import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import AdminDashboard from "./Admin/AdminDashboard";

import AddCategory from "./Admin/AddCategory";
import AddProduct from "./Admin/AddProduct";
import ShowCategory from "./Admin/ShowCategory";
import EmailVerify from "./auth/EmailVerify";
import AdminRoute from "./auth/AdminRoute";
import AddBlog from "./Admin/AddBlog";
import ShowProduct from "./Admin/ShowProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import AdminSidebar from "./Admin/AdminSidebar";
import Profile from "./Pages/Profile";
import AdminSidebars from "./Layout/AdminSidebars";





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
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="/blogdetaill" element={<BlogDetaill />} />
            <Route path="/blogdetailll" element={<BlogDetailll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/autoplay" element={<AutoPlay />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/activity" element={<Activities />} />
            <Route path="/triptypes" element={<TripTypes />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/modal" element={<Modal />} /> */}
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/packages" element={<Packages/>}/>
          </Route>

            {/* connection */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/verify/:token" element={<Verify/>}/>
      
          <Route path="/login" element={<Login/>}/>
          <Route path="verify/:token" element={<EmailVerify/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgetpassword" element={<ForgetPassword/>}/>
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="profile" element={<Profile/>}/>
            <Route path ="adminsidebars" element={<AdminSidebars/>}/>

          {/* <Route path="/signup" element={<SignUp/>}/> */}

          <Route path="admin/" element={<AdminRoute/>}>
          {/* <Route path="dashboard" element={<Dashboard/>}/> */}
              <Route path="addblog" element={<AddBlog/>}/>
              <Route path="addcategory" element={<AddCategory/>}/>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="showcategories" element={<ShowCategory/>}/>
             
            
              <Route path="showproduct" element={<ShowProduct/>}/>
              {/* <Route path="showproduct" element={<ShowProduct/>}/> */}
              <Route path="updateproduct" element={<UpdateProduct/>}/>
              {/* <Route path="updateproduct" element={<UpdateProduct/>}/> */}

              <Route path="/admin/dashboard" element={<AdminDashboard/>}/>

             
            
        
            <Route path="/admin/sidebar" element={<AdminSidebar/>}/>
          {/* <Route path="admin/" element={<AdminRoute/>}/> */}
              {/* <Route path="addcategoty" element={<AddCategory/>}/> */}
          </Route>
        </Routes>
        </BrowserRouter>
     
    </>
  );
};

export default MyRoutes;
