import React, { useEffect, useState } from "react";
import "./Skills.css";
// import Lottie from "lottie-react";
// import animationData from "../../Img/Animationc.json";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJsSquare,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb } from "react-icons/si";
const ricons = [
  { iconimg: FaReact, iconcolor: "cyan" },
  { iconimg: FaNodeJs, iconcolor: "green" },
  { iconimg: FaBootstrap, iconcolor: "blue" },
  { iconimg: FaJsSquare, iconcolor: "green" },
  { iconimg: FaHtml5, iconcolor: "orange" },
  { iconimg: FaCss3, iconcolor: "blue" },
  { iconimg: SiTailwindcss, iconcolor: "cyan" },
  { iconimg: SiRedux, iconcolor: "#00a7e5" },
  { iconimg: SiMongodb, iconcolor: "#4DB33D" },
];

function Skills() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % ricons.length);
    }, 2000); // Change the interval (in milliseconds) based on your preference

    return () => clearInterval(interval);
  }, []); // Run the effect once when the component mounts
  const CurrentIcon = ricons[activeStep];

  return (
    <div>
      {/* className="my-20" */}
      <div className="h-52  text-center" style={{ backgroundColor: "#FFDF6C" }}>
        <h1
          className="text-4xl md:text-2xl font-bold  text-white py-10 "
          data-aos="slide-up"
        >
          My Dev Stack
        </h1>
      </div>
      <div
        className="max-md:mx-5 max-lg:mx-16 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg "
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        <div className="flex h-70 justify-center dilshad">
          <CurrentIcon.iconimg
            size={160}
            color={CurrentIcon.iconcolor}
            className="mt-10"
          />
        </div>
        {/* <div className="flex h-80 justify-center dilshad">
          <Lottie
            className="w-56"
            animationData={animationData}
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div> */}
        <div
          className="grid gap-4 max-lg:grid-cols-2 max-lg:justify-between lg:grid-cols-4 text-gray-500  max-lg:p-0 p-10"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <div className="text-center">
            <h1 className="text-xl font-bold text-black ">Front End</h1>

            <hr />
            <p className="font-semibold my-2">React</p>
            <p className="font-semibold my-2">JavaScript</p>
            <p className="font-semibold my-2">Redux</p>
            <p className="font-semibold my-5">HTML</p>
            <p className="font-semibold my-5">CSS/Sass</p>
            <p className="font-semibold my-5">HBS</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">UI / UX</h1>
            <hr />
            <p className="font-semibold my-5">Bootstrap</p>
            <p className="font-semibold my-5">Tailwind</p>
            <p className="font-semibold my-5">Material UI</p>
            <p className="font-semibold my-5">Media queries</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">Back End</h1>
            <hr />
            <p className="font-semibold my-5">Node JS</p>
            <p className="font-semibold my-5">Express JS</p>
            <p className="font-semibold my-5">Mongo DB</p>
            <p className="font-semibold my-5">Mongoose</p>
            <p className="font-semibold my-5">JWT</p>
            <p className="font-semibold my-5">MySQL</p>
            <p className="font-semibold my-5">Postman</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">Familiar With</h1>
            <hr />
            <p className="font-semibold my-2">TypeScript</p>
            <p className="font-semibold my-5">GIT-GitHub</p>
            <p className="font-semibold my-5">Figma</p>
            <p className="font-semibold my-5">AWS</p>
            <p className="font-semibold my-5">NGINX</p>
            <p className="font-semibold my-5">Socket.IO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
