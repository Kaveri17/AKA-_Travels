import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../utils/calendar";
import cn from "../utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { button } from "@material-tailwind/react";

const Cart = () => {
  // console.log(generateDate());

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  
  // State to manage button visibility
  const [showBtn, setShowBtn] = useState(false)
  // const [firstBtnState, setFirstBtnState] = useState(false)

  // Function to handle click on first button
  const handleShowBtn =()=>{
    setShowBtn(!showBtn); // Negates the value of the button like if true then it becomes false and vice versa
    // setFirstBtnState(true);
  }

  return (
    <>
      <div className="flex w-11/12 mx-auto lg:flex-row flex-col ">
        <div className="w-full lg:w-3/5 lg:border-r">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex items-center gap-2">
              <GrFormPrevious
                className='w-5 h-5 cursor-pointer hover:scale-105 transition-all"'
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className="cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className='w-5 h-5 cursor-pointer hover:scale-105 transition-all"'
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-center h-14 grid place-content-center text-gray-500 select-none text-sm"
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                // console.log("Current Month:", currentMonth);
                return (
                  <div
                    key={index}
                    className="p-2 h-14 border-t  grid place-content-center text-sm"
                  >
                    <h1
                      className={cn(
                        // currentMonth ? "" : "text-gray-400",
                        !currentMonth ? "text-gray-400" : "",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
            <div className="confirmbtn col-start-2 py-4">    
              {/* Show the first button only if firstBtnClicked state is false */}
              {/* {!firstBtnState && (
                <button 
                  className="first-btn bg-orange-500 text-white px-16 lg:px-14 xl:px-16 py-3 text-lg rounded-sm tracking-wider hover:bg-orange-600" 
                  onClick={handleShowBtn} //Calling handleShowBtn function on button click  
                >
                  Continue  
                </button>
              )}
              {showSecondBtn && (
                <button 
                  className="second-btn bg-orange-500 text-white px-16 lg:px-14 xl:px-16 py-3 text-lg rounded-sm tracking-wider hover:bg-orange-600"  >
                  Checkout 
                </button>
              )} */}
              {!showBtn ?
                <button 
                className="first-btn bg-orange-500 text-white px-16 lg:px-14 xl:px-16 xl:ms-24 lg:ms-14 md:ms-14 sm:ms-8 py-3 text-lg rounded-sm tracking-wider hover:bg-orange-600" 
                onClick={handleShowBtn} //Calling handleShowBtn function on button click  
                >
                Continue  
                </button>                
                :                
                <div className="flex items-center">
                  <p 
                    className="text-orange-500 cursor-pointer pe-3 sm:pe-24"
                    onClick={handleShowBtn} >
                    Back
                  </p>

                  <button 
                    className="second-btn bg-orange-500 text-white px-16 lg:px-14 xl:px-16 py-3 text-lg rounded-sm tracking-wider hover:bg-orange-600"                      
                    >
                    Checkout 
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 lg:px-5">
          <h2 className="text-gray-400 py-2 text-sm font-semibold flex justify-between">
            BOOKING SUMMARY
          </h2>
          <h1 className="package-name text-black font-semibold text-xl py-2">
            7 Days tour to Explore the Beauty of Philippines
          </h1>
          <h3 className="font-semibold text-sm text-gray-500 py-2">
            Starting Date:
            <span className="font-semibold text-gray-400">
              {" "}
              {selectDate.toDate().toDateString()}{" "}
            </span>
          </h3>
          <div className="border-y-2 py-3">
            <h1 className="italic font-semibold py-1">Travellers</h1>
            <p className="adult-traveller text-sm font-semibold py-1 flex justify-between">
              1 Adult (Rs.1500/person)
              <span className="package-price text-md font-bold">$900</span>
            </p>
            <p className="child-traveller text-sm font-semibold py-1 flex justify-between">
              1 Child (Rs.1000/person)
              <span className="package-price text-sm font-bold">$600</span>
            </p>
          </div>
          <div className="package-total text-end py-3 text-lg">
            <p>
              Total: Rs.{" "}
              <span className="totalprice font-bold text-xl"> 2500</span>
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Cart;
