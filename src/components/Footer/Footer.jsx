import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaChrome,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="bg-theme flex justify-center">
        <div className="md:w-full">
          <div className="p-5 text-center">
            <p className="text-gray-100 pb-3">Designed and Developed By</p>
            <div className="h-1 border-2 BtColor border-dotted"></div>
            <div className=" flex text-gray-50 justify-evenly py-3 ">
              <a href="https://jaseem.vercel.app/resume">
                <FaChrome className="cursor-pointer footerLogo" />
              </a>
              <a href="https://www.facebook.com/muhammed.dilshad.9659/">
                <FaFacebook className="cursor-pointer footerLogo" />
              </a>
              <a href="https://www.instagram.com/muhammed.dilshad.n/">
                <FaInstagram className="cursor-pointer footerLogo" />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-dilshad-991599230/">
                <FaLinkedin className="cursor-pointer footerLogo" />
              </a>
              <a href="https://github.com/MuhammedDilshad">
                <FaGithub className="cursor-pointer footerLogo" />
              </a>
            </div>
            <div className="h-1 border-2 BtColor border-dotted"></div>
            <p className="text-gray-100 pt-3">Muhammed Dilshad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
