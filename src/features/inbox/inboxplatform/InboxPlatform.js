import React from 'react'
import $ from 'jquery'
import './inboxplatform.style.scss'
import DotIcon from '../../../icons/inboxplatform/Dot.icon'
import JobDetails from '../jobdetails/JobDetails'
import { useInboxContext } from '../../../pages/inbox/inbox.context'
import InboxChat from '../inboxchat/InboxChat'

function InboxPlatform () {
  const { showDetails, setShowDetails } = useInboxContext()

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

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
            <div className='btn-outline-dark' onClick={toggleDetails}>
              {showDetails ? 'Hide details' : 'Show details'}
            </div>
          </div>
        </div>

        <InboxChat />
      </div>
      {showDetails && <JobDetails />}
    </div>
  )
}

export default InboxPlatform
