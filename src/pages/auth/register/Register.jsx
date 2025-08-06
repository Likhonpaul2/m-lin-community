import React from 'react';
import CoverImage from "../../../assets/register_cover.jpg"

const Register = () => {
    return (
        <div className='min-h-screen grid grid-cols-6'>
            <div className='col-span-3 flex items-center justify-center'>
                <div>

                </div>
            </div>
            <div className='col-span-3 flex items-center justify-center'>
                <img src={CoverImage} alt="Cover Image" className="w-full h-screen object-cover overflow-hidden" />
            </div>
        </div>
    );
};

export default Register;