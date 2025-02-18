import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CiMail } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import "./ContactContent.css";

function ContactContent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8od8tn9",
        "template_g79hi8t",
        form.current,
        "9lQbMOXgvuRO6PVFk"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col md:flex-row  max-md:flex-col	">
      <div className="max-sm:m-5 max-sm:p-5 m-10 md:w-2/4 bg-gray-200 text-black p-10 shadow-2xl rounded">
        <div className="flex items-center">
          <AiOutlineUser className=" pr-2 IconStyle" />
          <strong className="text-lg font-semibold">Muhammed Dilshad</strong>
        </div>
        <div className="flex items-center">
          <CiMail className="pr-2 IconStyle" />
          <strong className="text-lg font-semibold">md.mdsar@gmail.com</strong>
        </div>
        <div className="flex items-center">
          <IoCallOutline className="pr-2 IconStyle" />
          <strong>+971 547288743</strong>
        </div>
        <div className="flex items-center">
          <IoLocationOutline className="pr-2 IconStyle" />
          <strong>United Arab Emirates</strong>
        </div>
        <div className="flex items-center">
          <BsPersonWorkspace className="pr-2 IconStyle" />
          <strong>MERN Stack Developer</strong>
        </div>
        <div className="flex items-center">
          <small className="pl-10">Brototype, Calicut</small>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">2022 - 2023</small>
        </div>
        <div className="flex items-center">
          <BsPersonWorkspace className="pr-2 IconStyle" />
          <strong>Junior Full Stack Developer</strong>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">Voxelkraftz</small>
        </div>
        <div className="flex items-center">
          <MdCastForEducation className="pr-2 IconStyle" />
          <strong>Diploma in Electronics</strong>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">ETI, Thamarassery</small>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">2015 - 2017</small>
        </div>
        <div className="flex items-center">
          <FaAmericanSignLanguageInterpreting className="pr-2 IconStyle" />
          <strong>Language</strong>
        </div>

        <div className="flex items-center">
          <small className=" pl-10">English</small>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">Hindi</small>
        </div>
        <div className="flex items-center">
          <small className=" pl-10">Malayalam</small>
        </div>
      </div>
      <div className=" md:w-2/4 max-sm:m-5 max-sm:p-5 m-10 bg-gray-200 text-black p-10 shadow-2xl rounded">
        <h1 className="text-2xl font-semibold text-center ">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <strong>Name</strong>
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full text-white border-2 border-gray-300 rounded p-1 mt-5"
          />
          <label>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full  border-2 text-white border-gray-300 rounded p-1 mt-5"
          />
          <label>
            <strong>Message</strong>
          </label>
          <textarea
            name="message"
            className="w-full text-white border-2 border-gray-300 rounded p-1 mt-5"
          />
          <input
            type="submit"
            value="Send"
            className="cursor-pointer border-2 BtColor py-1 px-4 rounded mt-3 "
          />
        </form>
      </div>
    </div>
  );
}

export default ContactContent;
