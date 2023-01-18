import React, { useEffect } from 'react'
import { useInboxContext } from '../../../pages/inbox/inbox.context'
import './customerssection.style.scss'

function CustomersSection () {
  const { contract, setContract } = useInboxContext()
  const data = [
    {
      id: 0,
      image: '/images/profile-emojis/1.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      hasContract: true,
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      id: 1,
      image: '/images/profile-emojis/2.png',
      name: 'Jane Parker',
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available',
      hasContract: false
    },
    {
      id: 2,
      image: '/images/profile-emojis/3.png',
      name: 'Jane Parker',
      hasContract: true,
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      id: 3,
      image: '/images/profile-emojis/4.png',
      name: 'Jane Parker',
      hasContract: true,
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      id: 4,
      image: '/images/profile-emojis/5.png',
      name: 'Jane Parker',
      hasContract: true,
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    },
    {
      id: 5,
      image: '/images/profile-emojis/6.png',
      name: 'Jane Parker',
      hasContract: true,
      subtitle: 'Booking completed',
      message: 'Hello Alice, I’d like to know when you’ll be available'
    }
  ]

  useEffect(() => {
    setContract(data[0])

    return () => {}
  }, [])
  console.log(contract)
  const Customer = ({ x }) => {
    return (
      <div
        onClick={() => {
          setContract(x)
        }}
        className={contract.id === x.id ? 'customer active' : 'customer'}
      >
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
