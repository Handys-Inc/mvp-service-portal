import React from 'react'
import ArrowIcon from '../../../graphics/messageinput/Arrow.icon'
import ImageIcon from '../../../graphics/messageinput/Image.icon'
import './messageinput.style.scss'

function MessageInput () {
  return (
    <div id='message-input'>
      <a>
        <ImageIcon />
      </a>

      <form action=''>
        <input type='text' placeholder='Message Jane' />

        <div className='send-btn'>
          <ArrowIcon />
        </div>
      </form>
    </div>
  )
}

export default MessageInput
