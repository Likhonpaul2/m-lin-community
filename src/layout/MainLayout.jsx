import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';

const sidebarStyle = "fixed z-30 w-64 shadow-md p-6 left-80"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>

                <div className='flex'>
                    <div className='flex'>
                        <div className={`${sidebarStyle}`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error nemo consectetur neque reprehenderit cumque optio non, eos maxime ut omnis laborum quod. Praesentium eum minus ullam natus autem delectus veniam aliquam inventore? Cumque laboriosam nostrum placeat voluptates delectus, aut animi, dolorem accusamus quisquam iusto quos, consectetur dignissimos est ullam! Excepturi animi voluptates voluptas dolorum optio provident eum suscipit, iure aut illo qui ad? Iusto neque totam esse eaque commodi tempora optio repellat! Cumque tempore et illum dolor maxime dolorum quisquam dignissimos, repellat dolores ducimus deserunt, ut, omnis cum rerum veniam. Quasi repellendus accusantium eaque. Corrupti voluptatibus esse rerum quo!</p>
                        </div>
                    </div>
                    {/* Main Content Outlet */}
                    <main className="flex-1 flex flex-col max-w-150 mx-auto ">
                        <Outlet />
                    </main>
                </div>


            </div>
        </>
    );
};

export default MainLayout;