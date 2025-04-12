import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      {" "}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           
            <span className="ml-3 text-xl">Muhammad Mansoor</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-blue-600" href={"/"}>Home</Link>
            <Link className="mr-5 hover:text-blue-600" href={"#about"}>About</Link>
            <Link className="mr-5 hover:text-blue-600" href={"#skill"}>Skills</Link>
            <Link className="mr-5 hover:text-blue-600" href={"#project"}>Project</Link>
            <Link className="mr-5 hover:text-blue-600" href={"#Contact"}>Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
