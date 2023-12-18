import React from "react";

function About() {
  return (
    <div className="my-20">
      <div
        className="bg-projectPage p-5 text-3xl rounded-lg
          border-4 max-md:mx-5 max-lg:mx-16 mx-32 bg-white BtColor text-center"
        // style={{ backgroundColor: "#283618" }}
      >
        <strong className="text-black">About.</strong>
      </div>

      <div
        className="max-md:mx-5 max-lg:mx-16 mx-32 shadow-2xl bg-gray-50 mt-20 rounded-lg"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        <div
          className="text-black text-center max-lg:p-0 p-10"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <div className="BtColor border-4">
            {/* <h2 className="text-3xl font-bold mb-4">About Me</h2> */}
            <p className="mb-4 text-gray-500">
              <strong>
                Hello! I'm Muhammed Dilshad, a self-taught MERN stack developer
                passionate about crafting dynamic and user-friendly web
                applications. My journey into web development began with a keen
                interest in creating visually appealing user interfaces and
                solving complex problems through code. Specializing in the MERN
                stack, I've cultivated expertise in developing scalable and
                efficient solutions.
              </strong>
            </p>
            <p className="mb-4 text-gray-500">
              <strong>
                My commitment is to deliver seamless and visually engaging user
                experiences while adhering to the best coding practices and
                industry standards. Continuous learning is integral to my
                approach, and I am always eager to explore emerging technologies
                to enhance my skills and achieve outstanding results.
              </strong>
            </p>
            <p>
              <strong className="text-gray-500">
                As a versatile and adaptable developer, I thrive in fast-paced
                environments and embrace new challenges. My dedication to
                staying current in the ever-evolving field of web development
                enables me to bring fresh insights and innovative solutions to
                every project.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";

// function About() {
//   return (
//     <div className="my-20">
//       <div
//         className="bg-projectPage p-5 text-3xl rounded-lg
//           md:mx-5 border-2 border-blue-500 text-center bubble-shape"
//       >
//         <strong className=" text-black">About.</strong>
//       </div>

//       <div
//         className="max-md:mx-5 max-lg:mx-16 mx-32 shadow-2xl bg-gray-50 mt-20 rounded-lg  "
//         data-aos="zoom-in"
//         data-aos-duration="2500"
//       >
//         <div
//           className=" text-black text-center max-lg:p-0 p-10"
//           data-aos="zoom-in"
//           data-aos-duration="2500"
//         >
//           <div>
//             <h2>About Me</h2>
//             <strong>
//               Hello! I'm Muhammed Dilshad, a self-taught MERN stack developer
//               passionate about crafting dynamic and user-friendly web
//               applications. My journey into web development began with a keen
//               interest in creating visually appealing user interfaces and
//               solving complex problems through code. Specializing in the MERN
//               stack, I've cultivated expertise in developing scalable and
//               efficient solutions.
//             </strong>
//             <strong>
//               My commitment is to deliver seamless and visually engaging user
//               experiences while adhering to the best coding practices and
//               industry standards. Continuous learning is integral to my
//               approach, and I am always eager to explore emerging technologies
//               to enhance my skills and achieve outstanding results.
//             </strong>

//             <strong>
//               As a versatile and adaptable developer, I thrive in fast-paced
//               environments and embrace new challenges. My dedication to staying
//               current in the ever-evolving field of web development enables me
//               to bring fresh insights and innovative solutions to every project.
//             </strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
