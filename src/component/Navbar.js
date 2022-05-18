import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar(props) {
    return (
        <div>
            <header className={`text-${props.mode==='white'?'gray-600':'white'} bg-${props.mode}  body-font`}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center ext-gray-900 mb-4 md:mb-0" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">{props.title}</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className={`mr-5 hover:${props.mode==='white'?'text-blue-500':'text-blue-500'}`} to="/">Home</Link>
                        <Link className="mr-5" to="/">Second Link</Link>
                        <Link className="mr-5" to="/">Third Link</Link>
                        <Link className="mr-5" to="/about">About Us</Link>
                    </nav>
                    <button className={`inline-flex items-center ${props.mode==='white'?'bg-gray-200':'bg-[#6366f1]'} border-0 py-1 px-3 focus:outline-none hover:${props.mode==='white'?'bg-gray-300':'bg-blue-500'} rounded 
                    text-base mt-4 md:mt-0`} onClick={props.toggleDarkMode}> {props.mode==='white'?'Dark':'Light'} Mode
                    </button>
                </div>
            </header>
            <hr className='bg-indigo-500'/>
        </div>
    )
}
