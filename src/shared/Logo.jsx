import React from 'react';
export const textStyle = "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"

const Logo = ({size}) => {
    return (
        <div>
            <a className={`text-${size}xl font-extrabold ${textStyle}`}>MLin.</a>
        </div>
    );
};

export default Logo;