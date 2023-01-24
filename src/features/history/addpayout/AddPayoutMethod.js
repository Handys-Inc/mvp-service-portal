import React from 'react'
import CautionIcon from '../../../icons/addpayout/Caution.icon'
import './addpayout.style.scss'

function AddPayoutMethod () {
  return (
    <div id='add-payout-method'>
      <CautionIcon />
      <div className='inner'>
        <div className='d-flex d-column flex-column'>
          <h4>Add a payout method</h4>
          <p>You’ll need to setup your payouts in order to get paid</p>
          <div className='buttons'>
            <a href className='link'>
              Learn more
            </a>
            <a href className='btn btn-outline-dark'>
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPayoutMethod
