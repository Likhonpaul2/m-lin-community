import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

                    {/* Sidebar */}
                    <aside className="lg:col-span-3 hidden lg:block  shadow-md p-4 rounded h-fit sticky top-20">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error nemo consectetur neque reprehenderit cumque optio non, eos maxime ut omnis laborum quod. Praesentium eum minus ullam natus autem delectus veniam aliquam inventore? Cumque laboriosam nostrum placeat voluptates delectus, aut animi, dolorem accusamus quisquam iusto quos, consectetur dignissimos est ullam! Excepturi animi voluptates voluptas dolorum optio provident eum suscipit, iure aut illo qui ad? Iusto neque totam esse eaque commodi tempora optio repellat! Cumque tempore et illum dolor maxime dolorum quisquam dignissimos, repellat dolores ducimus deserunt, ut, omnis cum rerum veniam. Quasi repellendus accusantium eaque. Corrupti voluptatibus esse rerum quo!
                        </p>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-6 col-span-12">
                        <Outlet />
                    </main>

                    {/* Optional Right Sidebar (like LinkedIn) */}
                    <aside className="lg:col-span-3 hidden lg:block  shadow-md p-4 rounded h-fit sticky top-20">
                        <p>Right Sidebar Content (ads, suggestions, news, etc.)</p>
                    </aside>

                </div>
            </div>
        </>
    );
};

export default MainLayout;