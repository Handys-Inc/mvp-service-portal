import React from 'react'
import './interacemail.style.scss'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/interacemail/Right.icon'
import { useHomeContext } from '../../../pages/home/home.context'

function InteracEmail () {
  const {} = useHomeContext()
  return (
    <div id='interac-email'>
      {/* <h1>Please type in your Interac email</h1> */}
      <small>We recommend you set up auto-deposit</small>
      <input type='text' placeholder='Email address' />

      <div className='buttons'>
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
