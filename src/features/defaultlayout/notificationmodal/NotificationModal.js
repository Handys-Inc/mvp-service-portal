import React, { useState } from 'react'
import './notificationmodal.style.scss'
import BellIcon from './../../../icons/notificationmodal/Bell.icon'
import EnvelopeIcon from '../../../icons/notificationmodal/Envelope.icon'

function NotificationModal () {
  const [notifications, setNotifications] = useState([,])

  const Notification = () => {
    return (
      <div className='notification'>
        <EnvelopeIcon />
        <div className='content'>
          <div className='d-flex flex-column'>
            <p>
              Please confirm your email address by clicking on the link we just
              emailed you. If you cannot find the email, you can request a new
              confirmation email or change your email address.
            </p>
            <small>6 days ago</small>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='notification-modal'>
      {!notifications.length && (
        <div className='empty-body'>
          <BellIcon />
          <h6>Notifications</h6>
          <p>
            You’ve got a blank slate (for now). We’ll let you know when updates
            arrive
          </p>
        </div>
      )}
      {!!notifications.length && (
        <div className='body'>
          <h4>Notifications</h4>
          <Notification />
          <Notification />
        </div>
      )}
    </div>
  )
}

export default NotificationModal
