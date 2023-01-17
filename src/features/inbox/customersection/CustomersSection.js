import React from 'react'
import './customerssection.style.scss'

function CustomersSection () {
  const data = [
    {
      image: '/images/profile-emojis/1.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      image: '/images/profile-emojis/2.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      image: '/images/profile-emojis/3.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      image: '/images/profile-emojis/4.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      image: '/images/profile-emojis/5.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      image: '/images/profile-emojis/6.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    }
  ]
  const Customer = ({ x }) => {
    return (
      <div className='customer'>
        <img src={x.image} alt='' />
        <div className='content'>
          <div className='d-flex flex-column'>
            <small>{x.subtitle}</small>
            <h3>{x.name}</h3>
            <p>{x.message}</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div id='customers-section'>
      <div className='header'>
        <h2>All customers</h2>
      </div>
      <div className='customers'>
        {data.map((x, i) => (
          <Customer x={x} key={i} />
        ))}
      </div>
    </div>
  )
}

export default CustomersSection
