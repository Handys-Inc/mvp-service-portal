import React from 'react'
import './inboxchat.style.scss'
import Message from '../message/Message'
import MessageInput from '../messageinput/MessageInput'

function InboxChat () {
  const messages = [
    {
      date: 'January 13',
      arr: [
        {
          image: '/images/profile-emojis/3.png',
          name: 'Jane',
          time: '6:55 PM',
          message: 'Hello, I’d like to book your services for a few hours'
        },
        {
          image: '/images/profile-emojis/2.png',
          name: 'User',
          time: '7:55 PM',
          message:
            'Hello, I’m available today. How many hours do you want me for? Let me know so we can take it from there. Hello, I’m available today. How many hours do you want me for? Let me know so we can take it from there.'
        }
      ]
    }
  ]
  return (
    <div id='inbox-chat'>
      <div className='messages'>
        {messages.map((arr, index) => (
          <>
            <h4>{arr.date}</h4>
            {arr.arr.map((x, i) => (
              <Message message={x} />
            ))}
          </>
        ))}
      </div>
      <MessageInput />
    </div>
  )
}

export default InboxChat
