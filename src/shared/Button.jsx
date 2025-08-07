import React from 'react'
import { Link } from 'react-router'

export const btnStyle = "px-6 py-2 rounded-md text-white font-semibold transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50"
export const btnStyleSignOut = "px-6 py-2 rounded-md text-white font-semibold transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-500 to-purple-500 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50"

export default function Button({text, link}) {
    return (
        <Link to={link}>
            <button className="px-6 py-2 rounded-md text-white font-semibold transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50">
                {text}
            </button>
        </Link>
    )
}
