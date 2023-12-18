import React, { useEffect } from "react";
// import cv from "../../Img/MuhammedDilshadDec'.pdf";

function RecumeContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-black max-sm:m-0 m-10 ">
      <div className=" mx-auto  ">
        <img className="w-full h-auto" src="./images/3MhdDilshad.jpg" alt="" />
        {/* <embed
            src="./images/2MhdDilshad.pdf"
            alt="Please reload"
            type="application/pdf"
            height={800}
            width={700}
            className="w-96 h-96 "
          /> */}
        <a
          href="./images/2MhdDilshad.pdf"
          download
          className="grid mt-4 md:m-3 place-items-center"
        >
          <button className="cursor-pointer border-2 BtColor bg-white text-black py-1 px-4 rounded">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default RecumeContent;
