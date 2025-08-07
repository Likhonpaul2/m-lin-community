import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import { Navigate, Outlet } from 'react-router';


const MainLayout = () => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Sidebar */}
                    <aside className="lg:col-span-3 hidden lg:block sticky top-24 space-y-4">
                        {/* Shortcut Links */}
                        <div className="bg-base-100 shadow-md p-4 rounded-md">
                            <h3 className="font-semibold mb-2">Quick Links</h3>
                            <ul className="space-y-1 text-sm text-blue-600">
                                <li><a href="#">My Network</a></li>
                                <li><a href="#">Groups</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Followed Hashtags</a></li>
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-6 col-span-12">
                        <Outlet />
                    </main>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-3 hidden lg:block sticky top-24 space-y-4">
                        <div className="bg-base-100 shadow-md p-4 rounded-md">
                            <h3 className="font-semibold mb-2">Add to your feed</h3>
                            <ul className="space-y-3">
                                <li className="text-sm">
                                    <span className="font-medium">#reactjs</span><br />
                                    <button className="mt-1 text-xs text-blue-600 hover:underline">Follow</button>
                                </li>
                                <li className="text-sm">
                                    <span className="font-medium">#webdevelopment</span><br />
                                    <button className="mt-1 text-xs text-blue-600 hover:underline">Follow</button>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-base-100 shadow-md p-4 rounded-md text-sm text-gray-500">
                            <p>Ad Banner</p>
                        </div>
                    </aside>

                </div>
            </div>

            <Footer/>
        </>
    );
};

export default MainLayout;
