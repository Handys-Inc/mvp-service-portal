import React, { useState } from 'react'
import PinInput from 'react-pin-input'
import CloseIcon from '../../../icons/Close.icon'
import EnvelopeIcon from '../../../icons/confirmaccount/Envelope.icon'
import RightIcon from '../../../icons/confirmaccount/Right.icon'
import { useHomeContext } from '../../../pages/home/home.context'

function ConfirmAccount ({ onClose }) {
  const [code, setCode] = useState(false)
  const { setEnterCodeShow } = useHomeContext()

  return (
    <div id='confirm-account'>
      <>
        <div className='header'>
          <h3>Confirm account</h3>

          <div
            onClick={() => {
              onClose()
            }}
            className='modal-close'
          >
            <CloseIcon />
          </div>
        </div>

        <h4>Let us know it’s really you</h4>
        <p>
          To continue, you’ll need to confirm your account through your email
        </p>
        <div className='button'>
          <div className='d-flex align-items-center'>
            <EnvelopeIcon />
            <input type='text' placeholder='Email' />
          </div>

          <a
            href
            onClick={() => {
              setEnterCodeShow(false)
            }}
          >
            <RightIcon />
          </a>
        </div>

        <a className='help'>Need help?</a>
      </>
    </div>
  )
}

export default ConfirmAccount
