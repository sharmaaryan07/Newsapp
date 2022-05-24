import React, { Component } from 'react'
import Loading from './Loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center mt-36 mb-48'>
        <img src={Loading} alt="Loading" />
      </div>
    )
  }
}
