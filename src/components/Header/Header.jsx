import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/Projects",
    },
    {
      title: "Resume",
      key: "/Resume",
    },
    {
      title: "Contact",
      key: "/Contact",
    },
  ];

  return (
    <div
      className="w-100% flex justify-between p-5 text-white"
      style={{ backgroundColor: "#606C38" }}
    >
      <div>
        <strong className=" text-3xl font-semibold cursor-pointer hover:text-blue-500">
          Muhammed Dilshad
        </strong>
      </div>
      <div className="flex space-x-4 max-sm:hidden ">
        {menuItems.map((item, index1) => {
          return (
            <li key={index1} className="list-none ">
              <Link className=" text-lg text-white" to={item.key}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </div>

      <div className=" sm:hidden lg:hidden xl:hidden  md:hidden relative inline-block text-left">
        <div>
          <BiMenu
            onClick={() => setMenu(!menu)}
            className="text-3xl sm:hidden lg:hidden xl:hidden  md:hidden cursor-pointer"
          />
        </div>

        {menu && (
          <div
            className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-blend-overlay	 shadow-lg ring-1 ring-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              {menuItems.map((item, index2) => {
                return (
                  <li key={index2} className="list-none ">
                    <Link
                      className=" text-blue-500 block px-4 py-2 text-sm cursor-pointer hover:bg-white"
                      to={item.key}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
