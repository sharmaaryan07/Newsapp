
import React, { Component } from 'react'

export default class Newsitem extends Component {


    render() {
        let { title, discription, imgUrl, newsUrl } = this.props;


        return (
                        <div className="xl:w-1/4 md:w-1/2  mt-9 p-4 ">
                            <a href={newsUrl} target="_blank" rel="noreferrer">
                                <div className={`w-[310px] ${this.props.mode === 'white' ? 'bg-gray-200' : 'bg-gray-800'} hover:shadow-lg ${this.props.mode === 'white' ? ' hover:shadow-gray-500' : ' hover:shadow-indigo-500'} bg-opacity-40 p-6 rounded-lg`}>
                                    <img className="h-40 rounded w-full  object-cover object-center mb-6" src={imgUrl} alt="content" />
                                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">TITLE</h3>
                                    <h2 className={`text-lg ${this.props.mode === 'white' ? 'text-black' : 'text-white'} font-medium title-font mb-4`}>{title}</h2>
                                    <p className="leading-relaxed text-base">{discription}</p>
                                </div>
                            </a>
                        </div>
                
                // {/* // </div> */ }
        // {/* // </section> */ }
        )
    }
}
