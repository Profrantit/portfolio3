import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function NavBar() {
  return (
    <header className="sticky bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className=" flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex-flex items-center py-9 px-3 mr-4 text-white hover:text-red-400 text-4xl font-bold cursive tracking-widest"
          >
            Lorén
          </NavLink>
          <NavLink
            to="/post"
            className=" cursive inline-flex items-center py-3 px-3 my-6 rounded  hover:text-red-400 "
            activeClassName="text-gray-100 bg-gray-700"
          >
            Facts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded cursive hover:text-red-400 "
            activeClassName="text-gray-100 bg-gray-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded cursive hover:text-red-400 "
            activeClassName="text-gray-100 bg-gray-700"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Profrantit"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/axel-lor%C3%A9n-2562a9210/"
            className="mr-4"
            target="_blank"
            fgColor="#  fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
