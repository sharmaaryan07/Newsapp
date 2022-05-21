import React from 'react'

export default function Newsitem(props) {

    
      
    return (
        <div>
            <section className={`text-gray-400 body-font ${props.mode === 'white' ? 'white' : 'bg-gray-900'} mt-9 mx-2`}>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 md:w-1/2 p-4" >
                        <div className={`${props.mode === 'white' ? 'bg-gray-100' : 'bg-gray-800'} hover:shadow-lg ${props.mode === 'white' ? ' hover:shadow-gray-700' : ' hover:shadow-indigo-500'} bg-opacity-40 p-6 rounded-lg`}>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />

                            <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                                SUBTITLE
                            </h3>
                            
                            <h2 className={`text-lg ${props.mdoe === 'white' ? 'text-gray-900' : 'white'} font-medium title-font mb-4`}>
                                Chichen Itza
                            </h2>
                            
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
                    
            </section>
        </div>
    )
}
