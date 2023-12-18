import React from "react";
import Lottie from "lottie-react";

import animationData from "../../Img/react.json";
import { SiTailwindcss, SiRedux, SiMongodb } from "react-icons/si";
// import { SiRedux } from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJsSquare,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

function Tech() {
  return (
    <div className=" bg-white">
      <strong
        className="text-4xl text-black font-bold text-center my-6"
        // data-aos="slide-right"
      >
        Technologies I Use
      </strong>
      <div className="grid max-sm:grid-cols-1 grid-cols-3">
        <FaReact size={160} color="cyan" className="w-full text-center mt-10" />
        <FaNodeJs
          size={160}
          color="green"
          className="w-full text-center mt-10 animate-bounce"
        />
        <FaBootstrap
          size={160}
          color="blue"
          className="w-full text-center mt-10"
        />
        <FaJsSquare
          size={160}
          color="green"
          className="w-full text-center mt-10 animate-bounce"
        />
        <FaHtml5
          size={160}
          color="orange"
          className="w-full text-center mt-10"
        />
        <FaCss3
          size={160}
          color="blue"
          className="w-full text-center mt-10 animate-bounce"
        />
        <SiTailwindcss
          size={160}
          color="cyan"
          className="w-full text-center mt-10"
        />
        <SiRedux
          size={160}
          color="#00a7e5"
          className="w-full text-center mt-10 animate-bounce"
        />
        <SiMongodb
          size={160}
          color="#4DB33D"
          className="w-full text-center mt-10"
        />
      </div>
    </div>
  );
}

export default Tech;
