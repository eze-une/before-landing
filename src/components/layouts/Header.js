import React from "react";
import LogoImage from "../../assets/Group 1894.png";
import MenuImage from "../../assets/Frame 1893.png";
function Header() {
  return (
    //   <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
    //   <a href="#" className="p-2 mr-4 inline-flex items-center">
    //     <svg
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="fill-current text-white h-8 w-8 mr-2"
    //     >
    //       <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    //     </svg>
    //     <span className="text-xl text-white font-bold uppercase tracking-wide">
    //       Talwind CSS
    //     </span>
    //   </a>
    //   <button
    //     className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
    //     data-target="#navigation"
    //   >
    //     <i className="material-icons">menu</i>
    //   </button>
    //   <div
    //     className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
    //     id="navigation"
    //   >
    //     <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>Home</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>About</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>Services</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>Gallery</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>Products</span>
    //       </a>
    //       <a
    //         href="#"
    //         className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
    //       >
    //         <span>Contact Us</span>
    //       </a>
    //     </div>
    //   </div>
    // </nav>
    // <nav className=" py-2.5 lg:py-4 overflow-hidden">
    <div className="w-full flex flex-row items-center justify-between mx-auto py-5 overflow-hidden">
      <div className="flex items-center ">
        <img
          src={LogoImage}
          className="h-full h-10 lg:h-30 "
          alt="Flowbite Logo"
        />
        <div className="flex flex-col ml-5 text-right">
          <p className="font-bold text-1xl">Ablaze</p>
          <p>Labs</p>
        </div>
      </div>

      {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <img src={MenuImage} className="w-3 h-3" alt="Flowbite Logo" />
        </button> */}
      <div
        className=" md:block md:w-auto "
        id="navbar-default"
      >
        <img
          src={MenuImage}
          className="h-6 sm:h-5 lg:h-5"
          alt="Flowbite Logo"
        />
        {/* <p>serg</p> */}
      </div>
    </div>
    //  </nav>
  );
}

export default Header;
