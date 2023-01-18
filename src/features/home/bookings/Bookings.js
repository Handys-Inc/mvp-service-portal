import _ from 'lodash'
import React, { useState } from 'react'
import SearchPaperIcon from '../../../graphics/bookings/SearchPaper.icon'
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
            setType('completed')
          }}
          className={type === 'completed' ? 'bubble active' : 'bubble'}
        >
          Completed ({bookings.find(x => x.type === 'completed').arr.length})
        </div>
        <div
          onClick={() => {
            setType('pending')
          }}
          className={type === 'pending' ? 'bubble active' : 'bubble'}
        >
          Pending offers ({bookings.find(x => x.type === 'pending').arr.length})
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
      )}
    </div>
  )
}

export default Bookings
