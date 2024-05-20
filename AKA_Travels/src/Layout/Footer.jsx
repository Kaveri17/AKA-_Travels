import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { submitmessage } from "../api/Submitsend";
import { getGallery } from "../api/Gallapp";
import { API } from "../config";


const Footer = () => {
  // let [contact_email, setContactEmail] = useState('')
  // let [contact_fname, setContactFname] = useState('')
  // let [contact_lname, setContactLname] = useState('')
  // let [contact_phoneno, setContactphoneno] = useState('')
  // let [contact_message] = useState('I Would like to know more about AKA Travels.')

  // let [error,setError]=useState('')
  // let [success, setSuccess] = useState(false)

  // const handleSubmit = (event) => {
  //   event.preventDefault()


  //   const contact_fname = contact_email.substring(0, contact_email.indexOf('@'))
  //   setContactFname(contact_fname)
  //   submitmessage({contact_email, contact_fname,contact_message, contact_lname,contact_phoneno})
  //   .then(data => {
  //     if(data.error) {
  //       setError(data.error)
  //       setSuccess(false)
  //     }
  //     else{
  //       setError('')
  //       setSuccess(true)
  //       setContactEmail('')
  //       setContactphoneno('')
  //       setContactLname('')
  //     }
  //   })
  //   .catch(error => console.log(error))
  // }
  const [gallery, setGallery] = useState([])
  const [contact_email, setContactEmail] = useState('');
  const [contact_fname, setContactFname] = useState('');
  const [contact_lname, setContactLname] = useState('');
  const [contact_phoneno, setContactphoneno] = useState('');
  const [contact_message] = useState('I Would like to know more about AKA Travels.');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation

    if (!contact_email) {
      setError("please fill your email")

    }
    else if (!contact_email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Invalid Email")
    }
    else {



      const fname = contact_email.substring(0, contact_email.indexOf('@'));
      setContactFname(fname);

      const messageData = {
        contact_email,
        contact_fname: fname,
        contact_message,
        contact_lname,
        contact_phoneno
      };

      submitmessage(messageData)
        .then(data => {
          if (data.error) {
            setError(data.error);
            setSuccess(false);
          } else {
            setError('');
            setSuccess(true);
            setContactEmail('');
            setContactFname('');
            setContactLname('');
            setContactphoneno('');
          }
        })
        .catch(error => console.log(error));
    };
  }


  const showError = () => {
    if (error) {
      return <div className="text-red-500 font-bold text-2xl text-center">{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='text-green-500 text-xl font-bold text-center'>"Message Sent"</div>
    }
  }
  useEffect(() => {
    getGallery()
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setGallery(data)
          console.log(data)
        }
      }
      )
  }, [])


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
                  <a href="/contact">
                  <button className="font-bold border-2 border-solid px-2 py-2 bg-slate-200 hover:bg-fuchsia-200">
                    OPEN AN ACCOUNT
                  </button>
                  </a>
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

                  <Link to="/gallery">Gallery</Link>
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
                <div  className="flex flex-wrap w-full ">
                  {gallery?.slice(0, 6).map(galle => {


                    return <img 
                      src={`${API}/${galle.image}`}
                      alt=""
                      className="w-1/3 p-2 h-28"
                      key={galle._id}
                    />
                    {/* <img
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
                  /> */}
                  })

                  }
                </div>
              </div>

              <div className="flex-col w-full pt-24 md:ps-14 md:w-1/2 lg:w-1/4">
                <h1 className="text-3xl font-bold pb-5">Subscribe</h1>
                <p className="pb-4">
                  Subscribe Our NewsLetter For Getting For Quick Updates
                </p>
                {showError()}
                {showSuccess()}

                {/* <form action="#" method="post">
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
                </div> */}
                <form className="flex pt-2 gap-2 justify-center">
                  <input className='pt-2 rounded-md mt-1 text-black' type="email" placeholder="Enter Email" value={contact_email} onChange={event => setContactEmail(event.target.value)} />
                  <input type="hidden" value={contact_fname} />
                  <input type="hidden" value={contact_lname} />
                  <input type="hidden" value={contact_phoneno} />
                  <input type="hidden" value={contact_message} />
                  <button className="bg-red-400 p-2 rounded-lg mt-1" onClick={handleSubmit}>Subscribe</button>




                </form>

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
