
import React, { Component } from 'react'

export default class Newsitem extends Component {


    render() {
        let { title, discription, imgUrl, newsUrl } = this.props;


        return (
            // <section className={`text-gray-400 body-font ${this.props.mode === 'white' ? 'white' : 'bg-gray-900'}`}>
            //     <div class="container px-5 py-24 mx-auto">
            //         <div className="flex flex-wrap ">
            //             <div className="xl:w-1/4 md:w-1/2 p-4">
            //                 <a href={newsUrl}>
            //                     <div className={`${this.props.mode === 'white' ? 'bg-gray-200' : 'bg-gray-800'} hover:shadow-lg ${this.props.mode === 'white' ? ' hover:shadow-gray-500' : ' hover:shadow-indigo-500'} bg-opacity-40 p-6 rounded-lg`}>
            //                         <img className="h-40 rounded  object-cover object-center mb-6" src={imgUrl} alt="content" />
            //                         <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">TITLE</h3>
            //                         <h2 className={`text-lg ${this.props.mode === 'white' ? 'text-black' : 'text-white'} font-medium title-font mb-4`}>{title}</h2>
            //                         <p className="leading-relaxed text-base">{discription}</p>
            //                     </div>
            //                 </a>
            //             </div>
            //         </div>
            //     </div>
            // </section>

            // <section className="text-gray-600 body-font border-2 border-cyan-600 ">
            // <div className="container px-5 py-24 mx-auto border-2 border-cyan-600">

        
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
