import React, { useState } from 'react'
import './interacemail.style.scss'
import CloseIcon from './../../../icons/Close.icon'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/interacemail/Right.icon'
import { useHomeContext } from '../../../pages/home/home.context'
import {
  PROFILE_VERSIONS,
  useOnboardingContext
} from '../../../pages/onboarding/onboarding.context'

function InteracEmail () {
  const [email, setEmail] = useState('')
  const { setProfileVersion, setInteracObj } = useOnboardingContext()
  return (
    <div id='interac-email'>
      <div
        className='close'
        onClick={() => {
          setProfileVersion(PROFILE_VERSIONS[0])
        }}
      >
        <CloseIcon />
      </div>
      <h4>Please type in your Interac email</h4>
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
            setProfileVersion(PROFILE_VERSIONS[0])
          }}
        >
          <LeftIcon />
          <span>Back</span>
        </div>
        <div
          onClick={() => {
            setInteracObj({
              email
            })
            setProfileVersion(PROFILE_VERSIONS[0])
          }}
          className='btn-red'
        >
          <span>Continue</span>
          <RightIcon />
        </div>
      </div>
    </div>
  )
}

export default InteracEmail
