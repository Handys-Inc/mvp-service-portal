import React from 'react'
import './message.style.scss'
import DotIcon from '../../../icons/inboxchat/Dot.icon'

function Message ({ message }) {
  return (
    <div id='message'>
      <div className='d-flex'>
        <a href className='profile-img'>
          <img src={message.image} alt='' />
        </a>
        <div className='d-flex content'>
          <div className='d-flex flex-column'>
            <div className='d-flex author-info'>
              <h5>{message.name}</h5>
              <DotIcon />
              <small>{message.time}</small>
            </div>
            <p>{message.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
