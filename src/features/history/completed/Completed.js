import React, { useRef, useState } from 'react'
import DropDown from '../../../components/dropdown'
import DownIcon from '../../../icons/Down.icon'
import './completed.style.scss'
const DATE_OPTIONS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const DAY_OPTIONS = [...new Array(20)].map(
  (x, i) => new Date().getFullYear() - i
)
console.log(DAY_OPTIONS)
function Completed () {
  const [dates, setDates] = useState(DATE_OPTIONS)
  const [days, setDays] = useState(DAY_OPTIONS)
  const [startDate, setStartDate] = useState(DATE_OPTIONS[0])
  const [endDate, setEndDate] = useState(DATE_OPTIONS[0])
  const [startDay, setStartDay] = useState('')
  const [endDay, setEndDay] = useState('')
  const [payouts, setPayouts] = useState([])
  const dropRef = useRef()
  return (
    <div id='completed'>
      <div className='dropdowns'>
        <DropDown
          ref={dropRef}
          id='start_date'
          toggleEvent={() => dropRef.current.getAlert('start_date')}
          textColor={'#282828'}
          onSelect={setStartDate}
          selectedValue={
            <p>
              <b>From</b>
              <small>{startDate}</small>
            </p>
          }
          backBtn={<DownIcon />}
          list={dates}
        />
        <DropDown
          ref={dropRef}
          id='start_day'
          toggleEvent={() => dropRef.current.getAlert('start_day')}
          textColor={'#282828'}
          onSelect={setStartDay}
          selectedValue={startDay}
          backBtn={<DownIcon />}
          list={days}
        />

        <DropDown
          ref={dropRef}
          id='end_date'
          toggleEvent={() => dropRef.current.getAlert('end_date')}
          textColor={'#282828'}
          onSelect={setEndDate}
          selectedValue={
            <p>
              <b>To</b>
              <small>{endDate}</small>
            </p>
          }
          backBtn={<DownIcon />}
          list={dates}
        />

        <DropDown
          ref={dropRef}
          id='end_day'
          toggleEvent={() => dropRef.current.getAlert('end_day')}
          textColor={'#282828'}
          onSelect={setEndDay}
          selectedValue={endDay}
          backBtn={<DownIcon />}
          list={days}
        />
      </div>
      <div className='payouts'>
        {!payouts.length && (
          <div className='empty-payout'>
            <h5>You have not received any payouts</h5>
            <p>
              For the dates, listings and the payout method currently selected
            </p>
          </div>
        )}
        {!!payouts.length &&
          payouts.map((x, i) => (
            <div className='payout'>
              <div className='d-flex flex-column'>
                <h4>February, 2019</h4>
                <h5>Paypal</h5>
                <h5>HA789U8 Chemin De L' Albatros,Kamloops</h5>
              </div>
              <h5>$165 CAD</h5>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Completed
