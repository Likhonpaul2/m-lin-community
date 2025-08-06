import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { HiMiniHome } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    // Improved button style
    const buttonStyle = "btn bg-gradient-to-r from-blue-500 to-purple-500 text-black font-semibold px-6 py-2 rounded-lg shadow  transition-transform duration-200 border-0 ";
    const textStyle = "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"

    const navLinks =
        <>
            <li>
                <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="Home">
                        <HiMiniHome size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/my-networks"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="My Networks">
                        <BsPeopleFill size={25} className='' />
                    </span>
                </NavLink>
            </li>
        </>;



    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className={`text-4xl font-extrabold ${textStyle}`}>MLin.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div class="flex items-center space-x-4">
                        <button class="px-6 py-2 rounded-md text-white font-semibold bg-gray-800 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;