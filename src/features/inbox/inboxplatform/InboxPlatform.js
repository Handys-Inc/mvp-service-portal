import React from 'react'
import DotIcon from '../../../icons/inboxplatform/Dot.icon'

function InboxPlatform () {
  return (
    <div id='inbox-platform'>
      <div className='inbox-body'>
        <div className='inbox-header'>
          <div className='left'>
            <h3>Jane Parker</h3>
            <div className='online'>
              <span>Online </span>
              <DotIcon color={'#118431'} />
            </div>
          </div>
          <div className='right'>
            <div className='btn-outline-dark'>Hide details</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InboxPlatform
