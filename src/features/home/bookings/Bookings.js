import _ from 'lodash'
import React, { useState } from 'react'
import CancelIcon from '../../../graphics/bookings/Cancel.icon'
import SearchPaperIcon from '../../../graphics/bookings/SearchPaper.icon'
import TickIcon from '../../../graphics/bookings/Tick.icon'
import './bookings.style.scss'

const bookings = [
  {
    type: 'upcoming',
    arr: [
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      },
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      }
    ]
  },
  {
    type: 'pending',
    arr: [
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      },
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      },
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      }
    ]
  },
  {
    type: 'completed',
    arr: [
      {
        name: 'Jane Doe',
        description: 'I want my kitchen painted blue',
        amount: '$97.01',
        code: 'HA89288Y',
        date: 'February 6, 2023'
      }
    ]
  }
]

function Bookings () {
  const [data, setData] = useState({})
  const [type, setType] = useState(bookings.map(x => x.type)[0])

  return (
    <div id='bookings'>
      <h4>Your bookings</h4>

      <div className='bubbles'>
        <div
          onClick={() => {
            setType('upcoming')
          }}
          className={type === 'upcoming' ? 'bubble active' : 'bubble'}
        >
          Upcoming ({bookings.find(x => x.type === 'upcoming').arr.length})
        </div>
        <div
          onClick={() => {
            setType('pending')
          }}
          className={type === 'pending' ? 'bubble active' : 'bubble'}
        >
          Pending offers ({bookings.find(x => x.type === 'pending').arr.length})
        </div>
        <div
          onClick={() => {
            setType('completed')
          }}
          className={type === 'completed' ? 'bubble active' : 'bubble'}
        >
          Completed ({bookings.find(x => x.type === 'completed').arr.length})
        </div>
      </div>

      {_.isEmpty(bookings) && (
        <div className='data-section'>
          <div className='no-data'>
            <SearchPaperIcon />
            <p>No available data to show</p>
          </div>
        </div>
      )}

      {!_.isEmpty(bookings) && (
        <div className='table'>
          <div className='header'>
            <div className='title'>
              <h4>Name</h4>
            </div>
            <div className='title'>
              <h4>Short job description</h4>
            </div>
            <div className='title'>
              <h4>Amount</h4>
            </div>
            <div className='title'>
              <h4>Booking code</h4>
            </div>
            <div className='title'>
              <h4>Date</h4>
            </div>
          </div>

          <div className='body'>
            {bookings
              .find(x => x.type === type)
              .arr.map((x, i) => (
                <div className='table-row'>
                  <div className='title'>
                    <h5>{x.name}</h5>
                  </div>
                  <div className='title'>
                    <h5>{x.description}</h5>
                  </div>
                  <div className='title'>
                    <h5>{x.amount}</h5>
                  </div>
                  <div className='title'>
                    <h5>{x.code}</h5>
                  </div>
                  <div className='title'>
                    <h5
                      style={{
                        color: bookings
                          .find(x => x.type === 'completed')
                          .arr.includes(x)
                          ? '#118431'
                          : '',
                        fontWeight: bookings
                          .find(x => x.type === 'completed')
                          .arr.includes(x)
                          ? '500'
                          : ''
                      }}
                    >
                      {x.date}
                    </h5>
                    {bookings
                      .find(x => x.type === 'pending')
                      .arr.includes(x) && (
                      <div className='buttons'>
                        <a>
                          <TickIcon />
                        </a>
                        <a>
                          <CancelIcon />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* {!_.isEmpty(bookings) && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Short job description</th>
              <th>Amount</th>
              <th>Booking code</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings
              .find(x => x.type === type)
              .arr.map((x, i) => (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.description}</td>
                  <td>{x.amount}</td>
                  <td>{x.code}</td>
                  <td>{x.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )} */}
    </div>
  )
}

export default Bookings
