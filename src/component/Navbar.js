import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const navbar= (props)=> {
        return (
            <div className={`sticky top-0 bg-${props.mode === 'white' ? 'white' : 'gray-900'}`}>
                <header className={` text-${props.mode === 'white' ? 'black' : 'white'} body-font`}>
                    <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link className={`flex  items-center  mb-4 md:mb-0`} to="/">
                            <img src={logo} alt="Logo" className={`w-[5.5rem]  ${props.mode === 'white' ? "" : "invert"} `} />
                        </Link>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/">Home</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/business">Business </Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/entertainment">Entertainment</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/health">Health</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/science">Science</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/sports">Sports</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/technology">Technology</Link>
                            <Link className={`mr-5 hover:text-[#6366f1] `} to="/about">About</Link>


                        </nav>

                        <button onClick={props.toggleDarkMode} className={`inline-flex items-center ${props.mode === 'white' ? 'bg-gray-200' : 'bg-[#6366f1]'} border-0 py-1 px-3 focus:outline-none ${props.mode === 'white' ? 'hover:bg-gray-300' : 'hover:bg-blue-500'} rounded text-base mt-4 md:mt-0`} >
                            {props.mode === 'white' ? 'Dark' : 'Light'} Mode
                        </button>
                    </div>
                </header>
                <hr />
            </div>
        )

}

export default navbar;