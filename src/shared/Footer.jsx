import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">About Us</h3>
                    <p className="text-sm text-gray-400">
                        We are dedicated to connecting people and opportunities in the professional world.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/jobs" className="hover:text-white">Jobs</Link></li>
                        <li><Link to="/messages" className="hover:text-white">Messages</Link></li>
                        <li><Link to="/profile" className="hover:text-white">Profile</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li>Email: support@yourapp.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} YourApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
