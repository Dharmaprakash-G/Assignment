import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";

const Reviews = () => {
  return (
    <div className="mt-20 px-20 space-y-10 mb-[400px] items-center">
      <div className="flex items-center justify-center text-4xl font-montserrat">
        {" "}
        Client Reviews
      </div>
      <div className="flex items-center justify-center text-xl  font-poppins text-mutedGrayBlue">
        What Our Client Say
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="p-4 shadow-md rounded-full hover:bg-green-500">
          <SlArrowLeft />
        </div>

        <div className="grid grid-cols-3 gap-10 ">
          <div className="border-2 shadow-lg rounded-lg p-8 w-[346px] space-y-5 transform transition-transform duration-300 hover:scale-105">
            <div className="flex mb-10">
              <img src={r1} />
              <div className="grid grid-cols-1 grid-rows-2 ml-4 mt-2">
                <h6 className="text-xl font-montserrat font-semibold ">
                  Guy Hawkins
                </h6>
                <h6 className="text-sm font-montserrat ">
                  XCV Software solution
                </h6>
              </div>
              <img
                src={r4}
                className="h-[20px] items-end justify-end ml-4 mt-1"
              />
            </div>
            <p className="text-mutedGrayBlue font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum is simply dummy text of the printing and
              typesetting text of the printing and typesetting text of the
              printing and typesetting
            </p>
          </div>

          <div className="border-2 shadow-lg rounded-lg p-8 w-[346px] space-y-5 transform transition-transform duration-300 hover:scale-105">
            <div className="flex mb-10">
              <img src={r2} />
              <div className="grid grid-cols-1 grid-rows-2 ml-4 mt-2">
                <h6 className="text-xl font-montserrat font-semibold ">
                  Guy Hawkins
                </h6>
                <h6 className="text-sm font-montserrat ">Datatex infogen</h6>
              </div>
              <img
                src={r4}
                className="h-[20px] items-end justify-end ml-4 mt-1"
              />
            </div>
            <div className="text-mutedGrayBlue font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum is simply dummy text of the printing and
              typesetting text of the printing and typesetting text of the
              printing and typesetting
            </div>
          </div>

          <div className="border-2 shadow-lg rounded-lg p-8 w-[346px] space-y-5 transform transition-transform duration-300 hover:scale-105">
            <div className="flex mb-10">
              <img src={r3} />
              <div className="grid grid-cols-1 grid-rows-2 ml-4 mt-2">
                <h6 className="text-xl font-montserrat font-semibold">
                  Guy Hawkins
                </h6>
                <h6 className="text-sm font-montserrat ">ITSSA Solution </h6>
              </div>
              <img
                src={r4}
                className="h-[20px] items-end justify-end ml-4 mt-1"
              />
            </div>
            <div className="text-mutedGrayBlue font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since. Lorem Ipsum is simply dummy text of the printing and
              typesetting text of the printing and typesetting text of the
              printing and typesetting
            </div>
          </div>
        </div>
        <div className="p-4 shadow-md rounded-full hover:bg-green-500">
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
