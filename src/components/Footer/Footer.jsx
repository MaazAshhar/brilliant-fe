import React from "react";
import logo from "../../assets/logo/dark_logo.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const listItem1 = ["About Us", "Principles", "Careers", "Educators", "Press"];
const listItem2 = ["Courses", "Today", "Pricing", "Testimonials"];

const Footer = () => {
  return (
    <div className="bg-black py-6 text-gray-400">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:place-items-start">
          <div className="flex gap-2 items-center group">
            <img className="group-hover:cursor-pointer w-8" src={logo} alt="" />
            <h1 className="group-hover:cursor-pointer text-gray-100 uppercase text-xl sm:text-2xl">
              Brilliant
            </h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            {/* Company */}
            <div className="flex flex-col gap-6">
              <h1 className="text-gray-100">Company</h1>
              <ul className="flex flex-col gap-6">
                {listItem1.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 w-fit hover:text-gray-200 hover:cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Product */}
            <div className="flex flex-col justify-between gap-24">
              <div className="flex flex-col gap-6">
                <h1 className="text-gray-100">Product</h1>
                <ul className="flex flex-col gap-6">
                  {listItem2.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-400 w-fit hover:text-gray-200 hover:cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* social media icon */}
              <div className="flex gap-4">
              <FaFacebook className="text-2xl hover:cursor-pointer" />
              <LuInstagram className="text-2xl hover:cursor-pointer" />
              <FaTwitter className="text-2xl hover:cursor-pointer" />
              <FaLinkedinIn className="text-2xl hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-xs mt-16">
          <p className="text-gray-400">Help</p>
          <p className="text-gray-400">Term of Service</p>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">California Privacy Policy</p>
          <p className="text-gray-400">
            &copy; 2022 Brilliant Worldwide, Inc., Brilliant and the Brilliant
            Logo are trademarks of Brilliant Worldwide, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
