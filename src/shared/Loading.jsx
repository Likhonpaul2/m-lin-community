import React from 'react';

const Loading = () => {
    return (
        <div className='space-y-10 p-4 md:p-10 max-w-5xl mx-auto'>
            {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col gap-4 animate-pulse">
                    <div className="skeleton h-40 w-full rounded"></div>
                    <div className="skeleton h-4 w-1/4 rounded"></div>
                    <div className="skeleton h-4 w-full rounded"></div>
                    <div className="skeleton h-4 w-full rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default Loading;
