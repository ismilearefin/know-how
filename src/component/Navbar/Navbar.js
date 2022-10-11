import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
      <div className="navbar w-full bg-base-100 flex justify-between shadow-md">
  <div className="px-4 flex justify-between lg:navbar-start w-full">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Topics</Link></li>
        <li tabIndex={0}>
          <Link to="/statistics" className="justify-between">
          Statistics
          </Link>
        </li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
    <Link className=" normal-case font-bold text-blue-800 text-xl">Know-How</Link>
  </div>
  <div className="navbar-center font-bold hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Topics</Link></li>
      <li tabIndex={0}>
        <Link to="/statistics">
          Statistics
        </Link>
      </li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </div>
</div>      
    );
};

export default Navbar;