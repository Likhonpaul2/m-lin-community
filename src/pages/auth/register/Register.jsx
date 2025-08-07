import React, { useContext, useState } from 'react';
import CoverImage from '../../../assets/register_cover.jpg';
import { textStyle } from '../../../shared/Logo';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';
import Loading from '../../../shared/Loading';

const Register = () => {
    const { CreateUserWithEmailAndPassword, UpdateUserPhotoAndName } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        const userPhoto = "";

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        CreateUserWithEmailAndPassword(email, password)
            .then(() => {
                UpdateUserPhotoAndName(name, userPhoto)
                    .then(() => {
                        toast.success("Account Create Successfully");
                        navigate(location.state || "/");
                    })
                    .catch((error) => {
                        toast.error("Account Create Unsuccessfully");
                        console.log(error)
                    })
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use. Please use a different email.");
                } else {
                    toast.error("Registration failed. Please try again.");
                }
                console.log(error)
            })


        setSuccess("Registered successfully!");
        form.reset();


    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left side with form */}
            <div className="flex flex-col justify-center items-center px-8">
                <div className="w-full max-w-md">
                    <h2 className="text-xl mb-2">Start your journey</h2>
                    <h2 className={`text-4xl font-bold mb-8 ${textStyle}`}>Sign Up to MLin.</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm mb-2" htmlFor="confirm_password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="********"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {error && <p className="text-red-600 mt-2">{error}</p>}
                            {success && <p className="text-green-600 mt-2">{success}</p>}
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md mb-4 hover:bg-blue-700 font-bold">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm">
                        Have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side with image */}
            <div className="hidden md:block">
                <img src={CoverImage} alt="Cover" className="w-full h-screen object-cover" />
            </div>
        </div>
    );
};

export default Register;
