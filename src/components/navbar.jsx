import React, { useState } from "react";
import logo from "../assets/logo.png";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (menu === "services") setServicesOpen(!servicesOpen);
    if (menu === "products") setProductsOpen(!productsOpen);
    if (menu === "useCase") setUseCaseOpen(!useCaseOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setServicesOpen(false);
      setProductsOpen(false);
      setUseCaseOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white px-6 md:px-14 shadow p-2 fixed top-0 w-full z-50 ">
      <div className="max-w mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="logo" className="h-15" />
            </a>
          </div>

          
          <div className=" items-center justify-center space-x-10 text-md font-montserrat mt-3 relative hidden  lg:flex">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500">
              About Us
            </a>

            
            <div className="relative">
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                <span>Services</span>
                <SlArrowDown size={14} />
              </a>
              {servicesOpen && (
                <div className="absolute mt-2 w-48 bg-white border shadow-lg z-50">
                  <ul className="py-1 text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service1")}
                    >
                      Digital Transformation
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service2")}
                    >
                      IoT
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Facility Management
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      AI & ML
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Asset Tracking
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Business Intelligence
                    </li>
                  </ul>
                </div>
              )}
            </div>

           
            <div className="relative">
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("products");
                }}
              >
                <span>Products</span>
                <SlArrowDown size={14} />
              </a>
              {productsOpen && (
                <div className="absolute mt-2 w-48 bg-white border shadow-lg z-50">
                  <ul className="py-1 text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product1")}
                    >
                      Asset Tracking & Management System
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product2")}
                    >
                      IoT
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product3")}
                    >
                      Traceability
                    </li>
                  </ul>
                </div>
              )}
            </div>

           
            <div className="relative">
              <a
                href="#"
                className="flex items-center space-x-1 hover:text-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("useCase");
                }}
              >
                <span>Use Case</span>
                <SlArrowDown size={14} />
              </a>
              {useCaseOpen && (
                <div className="absolute mt-2 w-48 bg-white border shadow-lg z-50">
                  <ul className="py-1 text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase1")}
                    >
                      Compressed Air Flow Monitoring
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase2")}
                    >
                      RFID Based Asset Tracking
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase3")}
                    >
                      IoT Gateway for PLC
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-red-500">
              Clients
            </a>
            <a href="#" className="hover:text-red-500">
              Career
            </a>
          </div>

          
          <button className="mt-3 border border-black rounded px-4 py-2 transform transition-transform duration-300 hover:scale-105 hidden lg:block">
            Contact Us
          </button>

          
          <div className="lg:hidden  flex items-center">
            <button onClick={toggleMobileMenu} className="text-black">
              <SlArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-black" onClick={() => scrollToSection("home")}>
              Home
            </a>
            <a href="#" className="text-black" onClick={() => scrollToSection("about")}>
              About Us
            </a>

            <div>
              <button
                className="w-full text-left text-black"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                Services
              </button>
              {servicesOpen && (
                <div className="pl-4">
                  <ul className="text-sm">
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service1")}
                    >
                      Digital Transformation
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service2")}
                    >
                      IoT
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Facility Management
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      AI & ML
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Asset Tracking
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("service3")}
                    >
                      Business Intelligence
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full text-left text-black"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("products");
                }}
              >
                Products
              </button>
              {productsOpen && (
                <div className="pl-4">
                  <ul className="text-sm">
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product1")}
                    >
                      Asset Tracking & Management System
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product2")}
                    >
                      IoT
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("product3")}
                    >
                      Traceability
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full text-left text-black"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("useCase");
                }}
              >
                Use Case
              </button>
              {useCaseOpen && (
                <div className="pl-4">
                  <ul className="text-sm">
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase1")}
                    >
                      Compressed Air Flow Monitoring
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase2")}
                    >
                      RFID Based Asset Tracking
                    </li>
                    <li
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => scrollToSection("usecase3")}
                    >
                      IoT Gateway for PLC
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a href="#" className="text-black" onClick={() => scrollToSection("clients")}>
              Clients
            </a>
            <a href="#" className="text-black" onClick={() => scrollToSection("career")}>
              Career
            </a>

            <button className="w-full border border-black rounded px-4 py-2 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
