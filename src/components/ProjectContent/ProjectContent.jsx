import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Img/Animationproject.json";
import projectsData from "../../assets/resourses/Projects";
import "./ProjectContent.css";

function ProjectContent() {
  return (
    <div>
      <div className=" bg-white justify-center">
        <div className="h-screen flex justify-center">
          <Lottie
            animationData={animationData}
            className="w-98"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
        <div
          className="bg-projectPage p-5 text-3xl rounded-lg
          md:mx-5 border-2 BtColor text-center bubble-shape"
        >
          <strong className=" text-black">My Projects.</strong>
        </div>
      </div>

      <div className="grid mt-20 max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 items-center justify-between gap-10 mx-20s max-lg:mx-10">
        {projectsData.map((project, indux) => {
          return (
            <div key={indux}>
              <div className="relative max-sm:p-0 p-10 border-2 border-projectPage rounded-tl-3xl rounded-br-3xl text-center">
                <img
                  src={project.image}
                  className="w-full h-52 rounded-tl-3xl rounded-br-3xl"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black text-white hover:opacity-80">
                  <h1 className="text-3xl font-semibold">{project.title}</h1>
                  <div className="pr-0.5">
                    <a href={project.link}>
                      <button className="border-2 border-white py-2 px-5 mr-0.5 hover:bg-green-400 rounded-xl mt-5">
                        Demo
                      </button>
                    </a>
                    <a href={project.link}>
                      <button className="border-2 border-white py-2 px-5 hover:bg-green-400 rounded-xl mt-5">
                        GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectContent;
