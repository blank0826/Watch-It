import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="p-4 bg-black mb-3 ">
      <Link
        to="/home"
        className="font-medium 
        leading-tight
     text-3xl  
     mt-0 mb-2 
     text-white   
     inline-block 
     mr-4
     "
      >
        Watch-It
      </Link>
      <Link
        to="/login"
        className="font-medium
      text-blue-500 
      text-xl hover:text-blue-400"
      >
        Login
      </Link>
    </nav>
  );
}

export default NavBar;
