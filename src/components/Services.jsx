import React from "react";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";

const Services = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-10 lg:grid-cols-3 sm:px-10 md:px-20 mt-20 mb-20 lg:space-x-20 bg-lightGrayTransparent ">
        <div className="col-span-1 mt-10 mb-10">
          <h6 className="text-5xl font-montserrat mb-10">What We Do</h6>
          <h6 className="text-3xl font-poppins mb-5">
            Elevating Businesses Through Comprehensive Technology Services
          </h6>
          <p className="font-poppins text-mutedGrayBlue text-justify ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled since the 1500s, when an unknown
            printer took a galley of type and scrambled Lorem Ipsum is simply
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-rows-2 md:col-span-2 gap-5 mt-10 mb-10">
          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w1} />
            </div>
            <div className="text-lg font-poppins">Digital Transformation</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>

          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w2} />
            </div>
            <div className="text-lg font-poppins">IoT</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>

          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w3} />
            </div>
            <div className="text-lg font-poppins">Facility Management</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>

          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w4} />
            </div>
            <div className="text-lg font-poppins">AI & ML</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>

          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w5} />
            </div>
            <div className="text-lg font-poppins">Asset Tracking</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>

          <div className="border-2 border-gray-300 hover:border-red-500 rounded-xl space-y-2 p-5 transform transition-transform duration-300 hover:scale-105">
            <div>
              <img src={w6} />
            </div>
            <div className="text-lg font-poppins">Business Intelligence</div>
            <div className="text-mutedGrayBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              printing{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
