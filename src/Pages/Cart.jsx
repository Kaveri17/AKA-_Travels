import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../utils/calendar";
import cn from "../utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Cart = () => {
  console.log(generateDate());

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <>
      <div className="flex lg:divide-x justify-center w-11/12	mx-auto h-screen items-center lg:flex-row flex-col ">
        <div className="w-full lg:w-3/5 h-96">
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
                console.log("Current Month:", currentMonth);
                return (
                  <div
                    key={index}
                    className="p-2 h-14 border-t grid place-content-center text-sm"
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
          </div>
        </div>
        <div className="h-96 w-full lg:w-2/5 px-5 py-3 sm:px-5">
          <h2 className="text-gray-400 text-sm font-semibold py-2 ">
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
              1 Adult ($900/person)
              <span className="package-price text-md font-bold">$900</span>
            </p>
            <p className="child-traveller text-sm font-semibold py-1 flex justify-between">
              1 Child ($600/person)
              <span className="package-price text-sm font-bold">$600</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
