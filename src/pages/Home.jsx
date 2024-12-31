import React from "react";
import Navbar from "../components/navbar";
import banner from "../assets/banner1.svg";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Blogs from "../components/Blogs";
import Services from "../components/Services";
import Request from "../components/Request";
import Reviews from "../components/Reviews";
import ProductFooter from "../components/ProductFooter";

const Home = () => {
  return (
    <div className="bg-white mt-[150px]">
      <Navbar />

      
      <div className="flex items-center justify-center font-montserrat font-bold lg:text-5xl text-4xl md:text-4xl mt-10 px-4 text-center">
        The Best Development Place For Your Business
      </div>

      <div className="flex items-center justify-center  md:text-4xl lg:text-5xl text-4xl font-montserrat font-bold text-red-500 mt-5 px-4 text-center">
        Your Business
      </div>

      
      <div className=" lg:grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-20 mt-20 mb-10 items-center">
        <div className="px-5">
          <h6 className="lg:text-5xl text-4xl font-montserrat font-bold mb-4">
            We Build Your Dream
          </h6>
          <div className="flex gap-3 font-bold font-montserrat lg:text-5xl text-3xl">
            <h6 className="">Software</h6>
            <h6 className="text-red-500 mb-5">Easy</h6>
          </div>

          <div className="flex gap-3 font-montserrat mt-10">
            <div className="w-1 sm:w-2 bg-red-500 mt-2"></div>
            <div className="space-y-2 text-sm sm:text-base md:text-lg">
              <p className="text-justify sm:mr-20">
                We are not just IT experts, we are your strategic partners in navigating the ever-evolving landscape of technology and transformation. With a deep passion for innovation and a commitment to excellence, we empower businesses to harness the power of digital technology to drive growth and redefine their success.
              </p>
            </div>
          </div>

          <button className="mt-10 border-2 border-red-500 rounded-lg px-6 py-3 mb-5 transform transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
        </div>

        <div className="w-full">
          <img src={banner} className="w-full h-auto" alt="banner" />
        </div>
      </div>

      
      <Clients />
      <AboutUs />
      <Services />
      <Products />
      <ProductFooter/>
      <Blogs />
      <Reviews />
      <Request />

      <Footer />
    </div>
  );
};

export default Home;
