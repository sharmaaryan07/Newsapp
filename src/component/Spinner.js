import React from 'react'
import Loading from './Loading.gif'

const Spinner =()=> {
  
    return (
      <div className='flex justify-center mt-36 mb-48'>
        <img src={Loading} alt="Loading" />
      </div>
    )
}

export default Spinner;