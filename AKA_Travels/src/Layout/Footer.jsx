import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="px-16  pt-16 -my-20 relative">
          <div className="w-5/6 mx-auto">
            <div
              className="Ready flex  border-2 border-solid border-bg-slate-600 px-8 pt-16 "
              style={{ backgroundColor: "wheat" }}
            >
              <div className="flex flex-wrap md:w-full lg:w-1/2">
                <h1 className="text-2xl font-bold pb-3">
                  Ready to get Started?{" "}
                </h1>
                <p className="text-xl pb-9">
                  {" "}
                  It only takes a few minutes to register you FREE AKA Travel
                  account.
                </p>
                <div className="pb-4">
                  <button className="font-bold border-2 border-solid px-2 py-2 bg-slate-200 hover:bg-fuchsia-200">
                    OPEN AN ACCOUNT
                  </button>
                </div>
              </div>
              <div className="footer-up ps-48 w-2/5 ">
                <img
                  src="/Image/clip-removebg-preview.png"
                  alt=""
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Aka trvael */}
        <div
          className="foot pt-24 text-white  pb-16 ps-4  "
          style={{ backgroundColor: "black" }}
        >
          <div className="w-5/6 mx-auto ">
            <div className="flex flex-wrap  ">
              <div className="div w-full md:w-1/2 lg:w-1/4">
                <img src="/Image/logo2.png" alt="" className="w-1/2" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  praesentium nihil hic perferendis dolor praesentium nihil hic
                  perferendis dolor aperiam!
                </p>
                <div className="flex space-x-3 pt-3 text-xl">
                  <h1>
                    <i className="fa-brands fa-facebook rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i>
                  </h1>
                  <h1>
                    <i className="fa-brands fa-twitter  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i>
                  </h1>
                  <h1>
                    <i className="fa-brands fa-instagram  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i>
                  </h1>
                  <h1>
                    <i className="fa-brands fa-linkedin  rounded-full px-2 py-2 border-2 border-solid hover:bg-slate-300  text-white"></i>
                  </h1>
                </div>
              </div>
              <div className="pt-24 w-full md:ps-24 list-none md:w-1/2 lg:w-1/4">
                <h1 className="font-bold text-3xl pb-5 ">Useful Links</h1>
                <li className="pb-2 text-xl">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-2 text-xl">
                  <Link to="/popular">Popular</Link>
                </li>
                <li className="pb-2 text-xl">
                  <Link to="/pages">Pages</Link>
                </li>
                <li className="pb-2 text-xl">
                
                  <Link to ="/gallery">Gallery</Link>
                </li>
                <li className="pb-2 text-xl">
                  <Link to="/about">About</Link>
                </li>
                <li className="pb-2 text-xl">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="pb-2 text-xl">
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
              <div className="flex flex-col w-full pt-24 md:w-1/2 lg:w-1/4 ">
                <h1 className="text-3xl font-bold pb-12 ">Our Instagram </h1>
                <div className="flex flex-wrap w-full ">
                  <img
                    src="/Image/pic6.webp"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                  <img
                    src="/Image/pic4.jpeg"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                  <img
                    src="/Image/pic5.jpeg"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                  <img
                    src="/Image/pic1.jpeg"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                  <img
                    src="/Image/pic10.jpeg"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                  <img
                    src="/Image/pic9.webp"
                    alt=""
                    className="w-1/3 p-2 h-28"
                  />
                </div>
              </div>
              <div className="flex-col w-full pt-24 md:ps-14 md:w-1/2 lg:w-1/4">
                <h1 className="text-3xl font-bold pb-5">Subscribe</h1>
                <p className="pb-4">
                  Subscribe Our NewsLetter For Getting For Quick Updates
                </p>

                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="border-2 px-4 py-2 rounded-md"
                    required
                  />
                </form>
                <div className="pt-3 pe-3">
                  <button className="px-4 py-2 text-xl border-2 border-solid border-red-200 hover:bg-slate-400 rounded-md ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="div1 border-t-2 border-b-gray-300 "
          style={{ backgroundColor: "black" }}
        >
          <div className="mx-auto w-5/6">
            <div className="text-white px-3 py-3 text-center font-bold">
              <h1>
                Copyright @ 2024 AKA <span className="">Travels.</span> All
                Rights Reserved By <span>Teams</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
