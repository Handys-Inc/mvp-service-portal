import React, { useState } from 'react'
import './interacemail.style.scss'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/interacemail/Right.icon'
import { useHomeContext } from '../../../pages/home/home.context'

function InteracEmail ({ onClose }) {
  const { setSetupPaypalShow } = useHomeContext()
  const [email, setEmail] = useState('')
  return (
    <div id='interac-email'>
      {/* <h1>Please type in your Interac email</h1> */}
      <small>We recommend you set up auto-deposit</small>
      <input
        type='text'
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
        placeholder='Email address'
      />

      <div className='buttons'>
        <div
          className='btn-outline-red'
          onClick={() => {
            setSetupPaypalShow(true)
            onClose()
          }}
        >
          <LeftIcon />
          <span>Back</span>
        </div>
        <div
          className='btn-red'
          onClick={() => {
            if (!!email.length) {
              onClose()
            }
          }}
        >
          <span>Continue</span>
          <RightIcon />
        </div>
      </div>
    </div>
  )
}

export default InteracEmail
