import React, { useEffect } from 'react'
// Initialization for ES Users
// import {
//     Carousel,
//     initTWE,
//   } from "tw-elements";
  

const ImageSlider = () => {
    // initTWE({ Carousel });

//     useEffect(() => {
//         // Initialize TWE with the Carousel component
//         initTWE({ Carousel });
//       }, []); // Empty dependency array to run the effect only once
//   return (
    // <>       
    //     <div id="controls-carousel" className="relative w-full" data-carousel="slide">
    //         {/* Carousel wrapper  */}
    //         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //             {/* Item 1 */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-red-800" alt="..."/>
    //             </div>
    //             {/* Item 2 */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
    //                 <img src="/Image/bungeejump.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //             {/*  Item 3 */}
    //             <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="/Image/pic22.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
                
    //         </div>
    //         {/* Slider controls  */}
    //         <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
    //                 </svg>
    //                 <span className="sr-only">Previous</span>
    //             </span>
    //         </button>
    //         <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
    //                 </svg>
    //                 <span className="sr-only">Next</span>
    //             </span>
    //         </button>
    //     </div>
    // </>
    // <>
        

    //     <div id="default-carousel" class="relative w-full" data-carousel="slide">
    //         {/* <!-- Carousel wrapper --> */}
    //         <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
    //             {/* <!-- Item 1 --> */}
    //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //             {/* <!-- Item 2 --> */}
    //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //             {/* <!-- Item 3 --> */}
    //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //             {/* <!-- Item 4 --> */}
    //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //             {/* <!-- Item 5 --> */}
    //             <div class="hidden duration-700 ease-in-out" data-carousel-item>
    //                 <img src="https://source.colostate.edu/wp-content/uploads/2017/06/CFCT-Nature-Hiking.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    //             </div>
    //         </div>
    //         {/* <!-- Slider indicators --> */}
    //         <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    //             <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    //             <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    //         </div>
    //         {/* <!-- Slider controls --> */}
    //         <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    //             <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    //                 </svg>
    //                 <span class="sr-only">Previous</span>
    //             </span>
    //         </button>
    //         <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    //             <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //                 <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    //                 </svg>
    //                 <span class="sr-only">Next</span>
    //             </span>
    //         </button>
    //     </div>

    // </>

//     <>
//         <div
//   id="carouselExampleControls"
//   className="relative"
//   data-twe-carousel-init
//   data-twe-ride="carousel">
//   {/* <!--Carousel items--> */}
//   <div
//     className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//     {/* <!--First item--> */}
//     <div
//       className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-twe-carousel-item
//       data-twe-carousel-active>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
//         className="block w-full"
//         alt="Wild Landscape" />
//     </div>
//     {/* <!--Second item--> */}
//     <div
//       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-twe-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
//         className="block w-full"
//         alt="Camera" />
//     </div>
//     {/* <!--Third item--> */}
//     <div
//       className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-twe-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
//         className="block w-full"
//         alt="Exotic Fruits" />
//     </div>
//   </div>

//   {/* <!--Carousel controls - prev item--> */}
//   <button
//     className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-twe-target="#carouselExampleControls"
//     data-twe-slide="prev">
//     <span className="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="h-6 w-6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg>
//     </span>
//     <span
//       className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Previous</span
//     >
//   </button>
//   {/* <!--Carousel controls - next item--> */}
//   <button
//     className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-twe-target="#carouselExampleControls"
//     data-twe-slide="next">
//     <span className="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="h-6 w-6">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//       </svg>
//     </span>
//     <span
//       className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Next</span
//     >
//   </button>
// </div>
//     </>
// )
  
}

export default ImageSlider