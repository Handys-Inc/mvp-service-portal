import React from 'react'
import './assistance.style.scss'
import HeadPhoneIcon from '../../../graphics/assistance/HeadPhone.icon'

function Assistance () {
  return (
    <div id='assistance'>
      <h4>We’re here to help</h4>
      <div className='assistance-box'>
        <HeadPhoneIcon />
        <div className='d-flex flex-column'>
          <h6>Get express acess to our support team to assist you</h6>
          <p>
            As a service provider, you get one-tap access to specially trained
            support team
          </p>
        </div>
      </div>
    </div>
  )
}

export default Assistance
