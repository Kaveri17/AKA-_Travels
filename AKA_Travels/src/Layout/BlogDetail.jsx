import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { BlogDet, viewBlog } from '../api/Blog';
import { API } from '../config';
import { useParams } from 'react-router-dom';
import { getGallery } from '../api/Gallapp';
import { submitmessage } from '../api/Submitsend';
import { getActivities } from "../api/Act";


const BlogDetail = () => {
  const { id } = useParams()
  
  const [bdetail, setBdetail] = useState({})
  const [post_name, setPost_name] = useState('')
  const [post_comment, setPost_comment] = useState('')
  const [post_email, setPost_email] = useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [gallery, setGallery] = useState([])
  const [blogs, setBlogs] = useState([])
  const [contact_email, setContactEmail] = useState('');
  const [contact_fname, setContactFname] = useState('');
  const [contact_lname, setContactLname] = useState('');
  const [contact_phoneno, setContactphoneno] = useState('');
  const [contact_message] = useState('I Would like to know more about AKA Travels.');

 
  const [cat,setCat]=useState([])


  useEffect(() => {
    BlogDet(id)
      .then(data => {
        if (data?.error) {
          console.log(data.error)
        }
        else {
          setBdetail(data)
          console.log(data)
          // console.log(bdetail)
        }
      })
      .catch(error => console.error("error fetching blogs detail", error))
      getGallery()
      .then(data => {
        if(data?.error){
          console.log(data.error)
        }
        else{
          setGallery(data)
          console.log(data)
        }
      })
    
      viewBlog()
      .then(data => {
        if(data?.error){
          console.log(data.error)
        }
        else{
          setBlogs(data)
          console.log(data)
        }
      })
    

  
  },[id])



  useEffect(()=>{
    getActivities()
    .then(data=>{
        if(data?.error){
            console.log(data.error)
        }
        else{
            setCat(data)
            console.log(data)
        }
    })
  
  
  },[])


  const handlePost = event => {
    event.preventDefault();
    setError('');
    setSuccess(false);
    fetch(`${API}/addpost/${id}`, {
      method: 'POST',
      headers: {
        // Accept:'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ post_name, post_email, post_comment })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.error) {
          setError(data.error)
          setSuccess(false)

        }
        else {
          setError('')
          setSuccess(true)
          setPost_comment('')
          setPost_name('')
          setPost_email('')
        }

      })
      .catch(error => console.log(error))

  }
  const handleSubmits = (event) => {
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
      console.log(messageData)

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
            console.log(data)
          }
        })
        .catch(error => console.log(error));
    };
  }
  

  const showError = () => {
    if (error) {
      return <div className='text-bold text-center text-red-600 '>{error}</div>
    }
  }
  const showSuccess = () => {
    if (success) {
      return <div className='text-green-500 text-bold text-center'>"successfully done"</div>

    }
  }

  return (
    <>
      <div className="Blogs mx-auto w-5/6 ">
        <div className="mx-auto w-full md:w-5/6 flex flex-col md:flex-row justify-between pb-14">
          <div className="blog-left w-full md:w-4/6 px-4 md:px-12">


            <div className="w-full my-11">
              <div className='image'>


                <img src={`${API}/${bdetail.blog_image}`} alt={bdetail.blog_name} className="pic3 h-96" />
                <div className="blogscontainer">
                  <h1 className="font-extrabold leading-10 text-3xl font-serif py-8">{bdetail.blog_name}</h1>
                  <i className="bi bi-calendar pe-2 sm:pe-8 py-2 sm:py-8">{new Date(bdetail.createdAt).toLocaleDateString()}</i>
                  <i className="bi bi-person text-lg">Wp-travolo</i>
                  <p className="py-12 leading-10 text-1xl text-font-mono">Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui.  molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.<br />Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.<br />Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur elit.</p>
                </div>

                <div className="bg-gray-200 opacity-75 border-l-4 border-orange-600 py-4">
                  <h1 className="italic text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor in sit amget, consectetur elit.</h1>
                  <i className="bi bi-dash text-4xl text-red-600 py-12">{bdetail.author_name}</i>
                </div>

                <h1 className="font-extrabold leading-10 text-3xl font-serif py-5 ">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="py-8">Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin . Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
             

                
                <div className='flex flex-wrap'>
                {
                  gallery?.slice(3,6).map(gall => {
                  return<img src={`${API}/${gall.image}`} alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2  key={gall._id} " />
                })
              }
                  {/* <img src="\Image\pic23.jpeg" alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2" />
                  <img src="\Image\pic24.jpeg" alt="" className="h-35 w-1/3 py-2 px-4 sm:px-2" /> */}
                </div>
                

                <p className="py-8">Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin . Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>

              </div>
          
            </div>
            




            <h1 className="font-extrabold leading-10 text-3xl font-serif">LEAVE A COMMENT</h1>

            <p className="py-12 leading-10 text-1xl text-font-mono">Your email address will not be published. Required fields are marked *</p>
            {showError()}
            {showSuccess()}

            {/* {
              bdetail.comment?.length > 0
               && bdetail.comment.map( comment => {
                return <div className='w-full bg-white text-black text-base flex'>
                  <li>Name: {comment.post_name} </li>
                  <li>Comment: {comment.post_comment} </li>

                </div>
               }

               )
            } */}

            <input type="text" placeholder="Write Your Comment" className="bg-gray-200 mb-2 me-3" value={post_comment} onChange={event => setPost_comment(event.target.value)} />
            <input type="text" placeholder="Enter Your Name" className="bg-gray-200 mb-2 me-3" value={post_name} onChange={event => setPost_name(event.target.value)} />
            <input type="text" placeholder="Enter Your E-mail" className="bg-gray-200 mb-2" value={post_email} onChange={event => setPost_email(event.target.value)} />
            <div className="py-3">Save my name, email, and website in this browser for the next time I comment.</div>
            <button className="font-bold readmore bg-gray-600 text-white px-3 py-2 rounded-md mb-7" onClick={handlePost}>POST COMMENT</button>

            {
              bdetail.comment?.length > 0
               && bdetail.comment.map( comment => {
                return <div className='w-full bg-white text-black text-base flex list-none space-x-4'>
                  <li className='py-2'>Name: {comment.post_name} </li>
                  <li className='py-2'>Comment: {comment.post_comment} </li>

                </div>
               }

               )
            }
          </div>



          <div className="blog-right  flex flex-col w-full md:w-2/6  mt-8 ">

            {/* <div className="search">
              <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3 '>SEARCH</h1>
              <input type="text" class="w-2/5 sm:w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer" placeholder="Search..." />
            </div> */}

            {/* <div className="blogdown">
              <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3'>RECENT POSTS</h1>
            </div> */}
            {/* <div className='m-5 flex flex-col justify-center '>
              <img src="\Image\picc.webp" alt="" className='h-24 w-24 py-2 ' />
              <i class="bi bi-calendar pe-8 ">12 December 2023</i>
              <h1 className='font-bold'>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78. </h1>
              <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 ' />
              <i class="bi bi-calendar pe-8">12 December 2023</i>
              <h1 className='font-bold'>The messages for Greek tourism at ITB Berlin, one of world's largest travel exhibitions, give high.</h1>
              <img src="\Image\picccc.jpeg" alt="" className='h-24 w-24 py-2 ' />
              <i class="bi bi-calendar pe-8">12 December 2023</i>
              <h1 className='font-bold'>Thailand has positioned itself astutely to capture outbound travel demand from China. </h1>
            </div>
            <div className='font-extrabold leading-10 text-2xl font-serif underline m-3'>CATEGORY</div>
            <ul className='list-unstyled w-full'>
              <div className=' py-4 px-6'>
                <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">LUXURY(5)</a></li>
                <li className=' categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">FOOD(3)</a></li>
                <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">SUMMER(2)</a></li>
                <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">TRAVEL(6)</a></li>
                <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">NEW YEAR(4)</a></li>
              </div>
            </ul>
            <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>LETTER</div>
            <input type="email" placeholder='Enter your email here' name='user_email' required className=' py-2 m-3' />
            <button type='submit' className=' py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button>
            <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>NEVER MISS NEWS</div>
            <div class="flex flex-wrap justify-center m-1">
              <a href="" class="icons text-2xl  md:p-2"><i class="hi bi bi-facebook pe-3"></i></a>
              <a href="" class="icons text-2xl  md:p-2"><i class="hiiii bi bi-instagram pe-3"></i></a>
              <a href="" class="icons text-2xl  md:p-2"><i class="hiiiii bi bi-twitter pe-3"></i></a>
              <a href="" class="icons text-2xl  md:p-2"><i class="hiii bi bi-pinterest pe-3"></i></a>
            </div>
          </div>
        </div>
      </div>
 */}

          
         {/* <div className="search">
         <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3 '>SEARCH</h1>
         <input type="text" class="w-2/5 sm:w-2/5 py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 m-6 cursor-pointer" placeholder="Search..."/>
         </div> */}
              
         <div className="blogdown">
         <h1 className='font-extrabold leading-10 text-2xl font-serif underline m-3'>RECENT POSTS</h1>
         </div>
         {blogs?.length > 0 && blogs.map(blog => {
         return<div className='m-5 flex flex-col justify-center 'key={blog._id}>
         
            
              <img src={`${API}/${blog.blog_image}`} alt="" className='h-24 w-24 py-2 ' /> 
         <i class="bi bi-calendar pe-8 ">{new Date(blog.createdAt).toLocaleDateString()}</i> 
         <h1 className='font-bold'>{blog.blog_name}. </h1>
       
         {/* <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
         <div className='m-3 flex flex-col justify-center '>
         <img src="\Image\picc.webp" alt="" className='h-24 w-24 py-2 '/>
         <i class="bi bi-calendar pe-8 ">12 December 2023</i>
         <h1 className='font-bold'>The number of tourists visiting the Maldives in 2023 surpassed the government's estimated figure by 78. </h1>
         <img src="\Image\piccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
         <i class="bi bi-calendar pe-8">12 December 2023</i>
         <h1 className='font-bold'>The messages for Greek tourism at ITB Berlin, one of world's largest travel exhibitions, give high.</h1>
         <img src="\Image\picccc.jpeg" alt="" className='h-24 w-24 py-2 '/>
         <i class="bi bi-calendar pe-8">12 December 2023</i>
         <h1 className='font-bold'>Thailand has positioned itself astutely to capture outbound travel demand from China. </h1> */}
       
         </div>
         })}
         
         <div className='font-extrabold leading-10 text-2xl font-serif underline m-3'>CATEGORY</div>
         {
                cat?.length>0 &&
                 cat.slice(0,5).map(category=>{

               
              return <ul className='list-unstyled w-full'>
                <a href="/activity">
              <div className='  px-6'>
              <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">{category.category_name}</a></li>
              {/* <li className=' categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">FOOD(3)</a></li>
              <li className='categories py-4 ps-4 my-1 rounded-lg hover:bg-orange-400'><a href="">SUMMER(2)</a></li>
              <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">TRAVEL(6)</a></li>
              <li className='categories py-4 ps-4 my-2 rounded-lg hover:bg-orange-400'><a href="">NEW YEAR(4)</a></li> */}
              </div>
              </a>
              </ul>
                })
              } 


         




         <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>LETTER</div>
         
         {/* <input type="email" placeholder='Enter your email here' name='user_email' required className=' py-2 m-3' /> 
         <button type='submit' className=' py-2 m-3 border-2 bg-orange-400'>SUBSCRIBE</button> */}
           {showError()}
            {showSuccess()}

                <form className="flex pt-2 gap-2 justify-center">
               
                  <input className='pt-2 rounded-md mt-1 text-black' type="email" placeholder="Enter Email" value={contact_email} onChange={event => setContactEmail(event.target.value)} />
                  <input type="hidden" value={contact_fname} />
                  <input type="hidden" value={contact_lname} />
                  <input type="hidden" value={contact_phoneno} />
                  <input type="hidden" value={contact_message} />
                  <button className="bg-red-400 p-2 rounded-lg mt-1" onClick={handleSubmits}>Subscribe</button>
                </form>
         <div className='font-extrabold leading-10 text-2xl font-serif underline m-5'>NEVER MISS NEWS</div>
         <div class="flex flex-wrap justify-center m-1">
         <a href="" class="icons text-2xl  md:p-2"><i class="hi bi bi-facebook pe-3"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiiii bi bi-instagram pe-3"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiiiii bi bi-twitter pe-3"></i></a>
         <a href="" class="icons text-2xl  md:p-2"><i class="hiii bi bi-pinterest pe-3"></i></a>
         </div>
         </div>
         </div>
         </div>
         


    </>
  );
}

export default BlogDetail;