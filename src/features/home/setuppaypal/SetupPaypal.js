import React, { useState } from 'react'
import { useRef } from 'react'
import './setuppaypal.style.scss'
import CheckBox from '../../../components/checkbox/CheckBox'
import DropDown from '../../../components/dropdown'
import ArrowIcon from '../../../icons/setuppaypal/Arrow.icon'
import LockIcon from '../../../icons/setuppaypal/Lock.icon'
import DownIcon from './../../../icons/Down.icon'
import { useHomeContext } from '../../../pages/home/home.context'

const NAME_OPTIONS = ['New account holder', 'Alice Iris']
function SetupPaypal ({ onClose }) {
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [names, setNames] = useState(NAME_OPTIONS)
  // const [first, setfirst] = useState(second)
  const nameRef = useRef()
  const { setConfirmAccountShow } = useHomeContext()
  return (
    <div id='setup-paypal'>
      <p>This is the name that will be associated with your Paypal account</p>

      <div className='form-group'>
        <label htmlFor='name'>Whose account is it?</label>
        <DropDown
          ref={nameRef}
          id='name'
          toggleEvent={() => nameRef.current.getAlert('name')}
          textColor={'#282828'}
          onSelect={setName}
          selectedValue={
            !!name.length ? (
              <div className='d-flex selected-name flex-column'>
                <h6>Select One</h6>
                <h5 className='mt-1'>{name}</h5>
              </div>
            ) : (
              <div className='d-flex selected-name flex-column'>
                <h6>Select One</h6>
              </div>
            )
          }
          backBtn={<DownIcon />}
          list={names}
        />
      </div>
      <small>
        Choose from people you’ve add to your provider account. <a>More info</a>
      </small>
      {name === NAME_OPTIONS[0] && (
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

            <div className='inputs'>
              <div className='input'>
                <input
                  type='text'
                  value={firstName}
                  onChange={e => {
                    setFirstName(e.target.value)
                  }}
                  placeholder='First name'
                />
              </div>
              <div className='input'>
                <input
                  type='text'
                  value={lastName}
                  onChange={e => {
                    setLastName(e.target.value)
                  }}
                  placeholder='Last name'
                />
              </div>
            </div>
            <small>
              Enter the account holder’s name exactly as it appears on bank
              statements
            </small>
          </div>
        </>
      )}

      <div className='buttons'>
        <div className='btn-outline-red'>
          <ArrowIcon
            style={{
              marginRight: 13
            }}
          />
          <span>Back</span>
        </div>
        <div
          className='btn-red'
          onClick={() => {
            if (name === NAME_OPTIONS[0]) {
              setNames([...names, firstName + ' ' + lastName])
              setName(firstName + ' ' + lastName)
            } else {
              onClose()
              setConfirmAccountShow(false)
            }
          }}
        >
          {name !== NAME_OPTIONS[0] && (
            <>
              <span>Continue</span>
              <ArrowIcon
                style={{
                  marginLeft: 13
                }}
              />
            </>
          )}
          {name === NAME_OPTIONS[0] && (
            <>
              <LockIcon
                style={{
                  transform: 'none',
                  marginRight: 13
                }}
              />
              <span>Continue to Paypal</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SetupPaypal
