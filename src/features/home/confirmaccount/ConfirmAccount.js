import React, { useState } from 'react'
import PinInput from 'react-pin-input'
import EnvelopeIcon from '../../../icons/confirmaccount/Envelope.icon'
import RightIcon from '../../../icons/confirmaccount/Right.icon'

function ConfirmAccount () {
  const [code, setCode] = useState(false)
  const [pinCode, setPinCode] = useState('')
  return (
    <div id='confirm-account'>
      {!code && (
        <>
          <div className='header'>
            <h3>Confirm account</h3>
          </div>

          <h4>Let us know it’s really you</h4>
          <p>
            To continue, you’ll need to confirm your account through your email
          </p>
          <div className='button'>
            <div className='d-flex align-items-center'>
              <EnvelopeIcon />
              <span>Email</span>
            </div>

            <a>
              <RightIcon />
            </a>
          </div>

          <a>Need help?</a>
        </>
      )}
      {code && (
        <>
          <p>Enter the code sent to your email</p>
          <PinInput
            length={4}
            initialValue=''
            secret
            onChange={(value, index) => {
              setPinCode(value)
            }}
            type='numeric'
            inputMode='number'
            style={{ padding: '10px 0' }}
            inputStyle={{ borderColor: 'red' }}
            inputFocusStyle={{ borderColor: 'blue' }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />

          <div className='button'>
            <div className='btn-pink'>Confirm</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ConfirmAccount
