import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <header className={`text-${this.props.mode === 'white' ? 'black' : 'white'} bg-${this.props.mode === 'white' ? 'white' : 'gray-900'}body-font`}>
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link className={`flex title-font font-medium items-center  mb-4 md:mb-0`} to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </Link>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link className={`mr-5 hover:text-white `} to="/">Home</Link>
                            <Link className={`mr-5 hover:text-white `} to="/">Second Link</Link>
                            <Link className={`mr-5 hover:text-white `} to="/">Third Link</Link>
                            <Link className={`mr-5 hover:text-white `} to="/about">About</Link>
                        </nav>

                        <button onClick={this.props.toggleDarkMode} className={`inline-flex items-center ${this.props.mode === 'white' ? 'bg-gray-200' : 'bg-[#6366f1]'} border-0 py-1 px-3 focus:outline-none ${this.props.mode === 'white' ? 'hover:bg-gray-300' : 'hover:bg-blue-500'} rounded text-base mt-4 md:mt-0`} >
                            {this.props.mode === 'white' ? 'Dark' : 'Light'} Mode
                        </button>
                    </div>
                </header>
                <hr />
            </div>
        )
    }
}
