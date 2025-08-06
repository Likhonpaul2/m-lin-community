import React from 'react';
import CoverImage from '../../../assets/register_cover.jpg';
import { textStyle } from '../../../shared/Logo';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left side with form */}
            <div className="flex flex-col justify-center items-center px-8">
                <div className="w-full max-w-md">
                    {/* Heading */}
                    <h2 className="text-xl mb-2">Start your journey</h2>
                    <h2 className={`text-4xl font-bold mb-8 ${textStyle}`}>Sign Up to MLin.</h2>

                    {/* Form */}
                    <form>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                name='name'
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                name='email'
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                name='password'
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                name='confirm_password'
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white p-3 rounded-md mb-4 hover:bg-blue-700 cursor-pointer font-bold">Sign Up</button>
                    </form>

                    {/* Social Login */}
                    {/* <div className="divider">Or</div>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="p-3 bg-gray-100 rounded-full cursor-pointer"><FaFacebook size={25} className='text-blue-700 ' /></button>
                        <button className="p-3 bg-gray-100 rounded-full cursor-pointer"><FcGoogle size={25} /></button>
                        <button className="p-3 bg-gray-100 rounded-full cursor-pointer"><FaApple size={25} className='text-black' /></button>
                    </div> */}

                    {/* Sign In link */}
                    <p className="text-center text-sm">
                        Have an account? <Link to={"/login"} href="#" className="text-blue-600 hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>

            {/* Right side with image */}
            <div className="hidden md:block">
                <img src={CoverImage} alt="Cover" className="w-full h-screen object-cover " />
            </div>
        </div>
    );
};

export default Register;
