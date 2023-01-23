import React, { useState } from 'react'
import PinInput from 'react-pin-input'
import './entercode.style.scss'

function EnterCode () {
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
        inputStyle={{ borderColor: 'red' }}
        inputFocusStyle={{ borderColor: 'blue' }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />

      <div className='button'>
        <div className='btn-pink'>Confirm</div>
      </div>
    </div>
  )
}

export default EnterCode
