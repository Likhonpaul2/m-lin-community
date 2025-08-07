import React, { useContext } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { HiMiniHome } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router';
import Button, { btnStyle, btnStyleSignOut } from './Button';
import { MdBusinessCenter } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { AiFillMessage } from 'react-icons/ai';
import { IoNotifications } from 'react-icons/io5';
import Logo from './Logo';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const { user } = useContext(AuthContext);
    // Improved button style
    const buttonStyle = "bg-gradient-to-r from-blue-500 to-purple-500 text-black font-semibold px-6 py-2 rounded-lg shadow  transition-transform duration-200 border-0 ";

    const navLinks =
        <>
            <li>
                <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? `${buttonStyle} ` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="Home">
                        <HiMiniHome size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/networks"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="My Networks">
                        <BsPeopleFill size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/jobs"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="Jobs">
                        <MdBusinessCenter size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/message"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="Messages">
                        <AiFillMessage size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/Notifications"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="Notifications">
                        <IoNotifications size={25} className='' />
                    </span>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/profile"} className={({ isActive }) =>
                    isActive ? `${buttonStyle}` : ""
                }>
                    <span className='tooltip tooltip-bottom' data-tip="My Profile">
                        <RxAvatar size={25} className='' />
                    </span>
                </NavLink>
            </li>
        </>;



    return (
        <div className='bg-base-100'>
            <div className="navbar sticky top-0 z-50 container mx-auto">
                <div className="navbar-start">

                    {/* mobile screen dropdown  */}
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

                    {/* logo component  */}
                    <Logo size={4} />

                </div>

                {/* for large screen  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        {
                            user ? <button className={`${btnStyleSignOut}`}>Sign Out</button> : <Button text={"Sign Up"} link={"/register"} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;