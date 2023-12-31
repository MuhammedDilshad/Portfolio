import React from "react";
import ksd from "../../Img/ksd.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";
function Banner() {
  return (
    <div className="flex max-md:p-10 max-lg:p-28 p-40 bg-white justify-evenly ">
      <div className="flex justify-center items-center max-sm:hidden">
        <img
          className="w-100% h-72 max-md:h-40
         rounded-full"
          src={ksd}
          alt=""
        />
      </div>

      <div className=" text-center">
        <p>
          <strong className="text-gray-500 pt-5">Hello I'am</strong>
        </p>
        <p>
          <strong className="text-3xl text-black font-bold pt-5">
            Muhammed Dilshad
          </strong>
        </p>
        <p>
          <strong className="text-1xl text-gray-500 pt-5 font-bold ">
            MERN Stack Developer
          </strong>
        </p>
        <div className="flex text-black justify-evenly pt-5">
          <a
            href="./images/MuhammedDilshad-1.pdf"
            download
            className="grid mt-4 md:m-3 place-items-center"
          >
            <button className="BtColor p-1 rounded-full border-2 ">
              <strong> Download CV</strong>
            </button>
          </a>

          <Link to={"/Contact"} className="grid mt-4 md:m-3 place-items-center">
            <button className="BtColor p-1 	 rounded-full border-2">
              <strong>Contact Info</strong>
            </button>
          </Link>
        </div>
        <div className="flex justify-center gap-10 pt-5">
          <a href="https://www.linkedin.com/in/muhammed-dilshad-991599230/">
            <FaLinkedin className="cursor-pointer text-black" size={30} />
          </a>
          <a href="https://github.com/MuhammedDilshad">
            <FaGithub className="cursor-pointer text-black " size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
