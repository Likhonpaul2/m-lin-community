import React from 'react';

const Loading = () => {
    return (
        <div className='space-y-10 p-10'>
            <div className="flex w-140 flex-col gap-8">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-140 flex-col gap-8">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-140 flex-col gap-8">
                <div className="skeleton h-50 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

        </div>
    );
};

export default Loading;