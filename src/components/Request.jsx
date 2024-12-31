import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Request = () => {
  const [selectedOrg, setSelectedOrg] = useState("");

  const organizations = ["Organization A", "Organization B", "Organization C"];

  const handleSelectChange = (event) => {
    setSelectedOrg(event.target.value);
  };

  return (
    <div className="lg:absolute mt-[-300px] px-10 md:px-20 mb-20 md:mb-20 ">
      <div className="border-transparent bg-gray-50 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-10">
          
          <div className="col-span-1">
            <div className="flex">
              <div className="space-y-5 p-10">
                <div className="text-4xl font-montserrat">
                  Request a Call Back
                </div>
                <div className="text-mutedGrayBlue font-poppins">
                  Thank You for reaching out to iTech! Please fill out the form
                  correctly. Our team will contact you shortly.
                </div>
              </div>
              <div className="md:h-[265px] w-[1px] bg-black mt-2 hidden lg:block"></div>
            </div>
          </div>

          
          <div className="col-span-1 md:col-span-2 font-poppins">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 p-3 mt-2 rounded-md "
                  />
                </div>
                <div className="grid">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="border border-gray-300 p-3 mt-2 rounded-md "
                  />
                </div>
                <div className="grid">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="border border-gray-300 p-3 mt-2 rounded-md "
                  />
                </div>

                <div className="grid">
                  <select
                    value={selectedOrg}
                    onChange={handleSelectChange}
                    className="border border-gray-300 p-3 mt-2 rounded-md text-gray-400"
                  >
                    <option value="" disabled hidden>
                      Select Organization
                    </option>
                    {organizations.map((org, index) => (
                      <option key={index} value={org} className="text-gray-900">
                        {org}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="border border-gray-300 p-3 mt-2 rounded-md w-full h-[70px] "
                />
              </div>
              <button className="mt-3 border border-red-500 rounded px-4 py-2 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
