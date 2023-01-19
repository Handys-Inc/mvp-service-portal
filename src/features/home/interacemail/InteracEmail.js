import React from 'react'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/interacemail/Right.icon'

function InteracEmail () {
  return (
    <div id='interac-email'>
      <h1>Please type in your Interac email</h1>
      <small>We recommend you set up auto-deposit</small>
      <input type='text' placeholder='Email address' />

      <div className='button'>
        <div className='btn-outline-pink'>
          <LeftIcon />
          <span>Back</span>
        </div>
        <div className='btn-pink'>
          <span>Continue</span>
          <RightIcon />
        </div>
      </div>
    </div>
  )
}

export default InteracEmail
