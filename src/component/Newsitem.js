
import React from 'react'

const Newsitem =(props)=> {


        let { title, discription, imgUrl, newsUrl,date, author, source } = props;


        return (
                        <div className="xl:w-1/4 md:w-1/2  mt-9 p-4 ">
                            <a href={newsUrl} target="_blank" rel="noreferrer">
                                <div className={`w-[310px] ${props.mode === 'white' ? 'bg-gray-200' : 'bg-gray-800'} hover:shadow-lg ${props.mode === 'white' ? ' hover:shadow-gray-500' : ' hover:shadow-indigo-500'} bg-opacity-40 p-6 rounded-lg`}>
                                    <img className="h-40 rounded w-full  object-cover object-center mb-6" src={imgUrl} alt="content" />
                                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SOURCE- <span className={`${props.mode === 'white' ? 'text-black' : 'text-white'}`}>{source}</span>  </h3>
                                    <h2 className={`mt-2 text-lg ${props.mode === 'white' ? 'text-black' : 'text-white'} font-medium title-font mb-4`}>{title}</h2>
                                    <p className="leading-relaxed text-base">{discription}...</p>
                                    <p className='mt-3 text-xs '>By {author} at {new Date(date).toGMTString()}</p>
                                </div>
                            </a>
                        </div>
        )
   
}

export default Newsitem;