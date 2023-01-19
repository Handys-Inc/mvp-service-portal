import React, { useState } from 'react'
import CheckBox from '../../../components/checkbox/CheckBox'
import DropDown from '../../../components/dropdown'
import ArrowIcon from '../../../icons/setuppaypal/Arrow.icon'
import LockIcon from '../../../icons/setuppaypal/Lock.icon'

function SetupPaypal () {
  const [name, setName] = useState('')
  return (
    <div id='setup-paypal'>
      <h1>Who owns this Paypal account?</h1>
      <p>This is the name that will be associated with your Paypal account</p>

      <div className='form-group'>
        <label htmlFor='name'>Whose account is it?</label>
        <DropDown />
      </div>
      <small>
        Choose from people you’ve add to your provider account . More info
      </small>
      {name === 'new' && (
        <>
          <div className='account-types'>
            <h4>Type of bank account</h4>
            <div className='d-flex flex-column'>
              <div className='line'>
                <CheckBox />
                <span>Personal</span>
              </div>
              <div className='line'>
                <CheckBox />
                <span>Business</span>
              </div>
            </div>
          </div>
          <div className='account-holder'>
            <h4>Account holder</h4>
            <input type='text' placeholder='Business name' />
            <small>
              Enter the account holder’s name exactly as it appears on bank
              statements
            </small>
          </div>
        </>
      )}

      <div className='buttons'>
        <div className='btn-outline-red'>
          <ArrowIcon />
          <span>Back</span>
        </div>
        <div className='btn-red'>
          <LockIcon />
          <span>Continue to Paypal</span>
        </div>
      </div>
    </div>
  )
}

export default SetupPaypal
