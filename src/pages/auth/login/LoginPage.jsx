import React from 'react';
import CoverImage from '../../../assets/register_cover.jpg';
import { textStyle } from '../../../shared/Logo';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* left side with image */}
            <div className="hidden md:block">
                <img src={CoverImage} alt="Cover" className="w-full h-screen object-cover" />
            </div>

            {/* right side with form */}
            <div className="flex flex-col justify-center items-center px-8">
                <div className="w-full max-w-md">
                    {/* Heading */}
                    {/* <h2 className="text-xl mb-2">Start your journey</h2> */}
                    <h2 className={`text-5xl font-bold mb-8 ${textStyle}`}>Sign In</h2>

                    {/* Form */}
                    <form>

                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@email.com"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white p-3 rounded-md mb-4 hover:bg-blue-700 cursor-pointer font-bold">Sign In</button>
                    </form>

                    {/* Social Login */}
                    <div className="divider">Or</div>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="p-3 bg-gray-100 rounded-full "><FaFacebook size={25} className='text-blue-700 ' /></button>
                        <button className="p-3 bg-gray-100 rounded-full "><FcGoogle size={25} /></button>
                        <button className="p-3 bg-gray-100 rounded-full "><FaApple size={25} className='text-black' /></button>
                    </div>

                    {/* Sign In link */}
                    <p className="text-center text-sm">
                        Don't have an account? <Link to={"/register"} href="#" className="text-blue-600 hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;