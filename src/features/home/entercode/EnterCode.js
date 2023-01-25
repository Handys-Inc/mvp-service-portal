import React, { useState } from 'react'
import PinInput from 'react-pin-input'
import './entercode.style.scss'

function EnterCode ({ onClose }) {
  const [pinCode, setPinCode] = useState('')
  return (
    <div id='enter-code'>
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
        inputStyle={{
          height: '102.52px',
          width: '100%',
          fontSize: '30px',
          border: '0.666424px solid #626262',
          borderRadius: '3.33212px'
        }}
        inputFocusStyle={{ borderColor: 'black' }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />

      <div className='button'>
        <div
          onClick={() => {
            onClose()
          }}
          className='btn-pink'
        >
          Confirm
        </div>
      </div>
    </div>
  )
}

export default EnterCode
