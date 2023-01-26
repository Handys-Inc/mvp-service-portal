import React, { useRef, useState } from 'react'
import { Nav } from 'react-bootstrap'
import './topsection.style.scss'
import DropDown from '../../../components/dropdown'
import DownIcon from '../../../icons/Down.icon'
import CloseIcon from '../../../icons/Close.icon'
import {
  useCalendarContext,
  VERSIONS
} from '../../../pages/calendar/calendar.context'
import {
  MONTHS,
  useDatepickerContext
} from '../monthlyversion/datepicker.context'
import { START_DATE } from '@datepicker-react/hooks'

function TopSection () {
  const { shownMonth, setShownMonth } = useCalendarContext()
  const { startDate, endDate, setTimeVersion } = useCalendarContext()
  const { availabilityShow, setDateState, setAvailabilityShow, dateState } =
    useDatepickerContext()
  const dropRef = useRef()

  const formDate = date => {
    const today = new Date()

    return (
      MONTHS[today.getMonth()] +
      ' ' +
      today.getDate() +
      ', ' +
      today.getFullYear()
    )
  }
  return (
    <div id='top-section'>
      {!availabilityShow && (
        <div className='d-flex w-100 align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <DropDown
              ref={dropRef}
              id='end_day'
              toggleEvent={() => dropRef.current.getAlert('end_day')}
              textColor={'#282828'}
              onSelect={setShownMonth}
              selectedValue={shownMonth + ' ' + new Date().getFullYear()}
              backBtn={<DownIcon />}
              list={MONTHS}
            />

            <Nav>
              <Nav.Item>
                <Nav.Link
                  eventKey={VERSIONS[0]}
                  onClick={() => {
                    setTimeVersion(VERSIONS[0])
                  }}
                >
                  Monthly
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey={VERSIONS[1]}
                  onClick={() => {
                    setTimeVersion(VERSIONS[1])
                  }}
                >
                  Yearly
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className='d-flex' onClick={() => setAvailabilityShow(true)}>
            <div className='red-btn'>Set availability</div>
          </div>
        </div>
      )}
      {availabilityShow && (
        <div className='d-flex align-items-center'>
          <div className='d-flex info flex-column'>
            <h5>Set availability</h5>
            <small>
              Select dates or a range for the next 30 days. Unspecified dates ar
              auto set to unavailable
            </small>
          </div>

          <div className='date-bubble'>
            <h6>Date</h6>
            {!!dateState.startDate && !dateState.endDate && (
              <span>{formDate(dateState.startDate)}</span>
            )}
            {!!dateState.startDate && !!dateState.endDate && (
              <span>
                {formDate(startDate)} - {formDate(endDate)}
              </span>
            )}
          </div>
          <div
            className='availabilty-btn'
            style={{
              background: !!dateState.startDate ? '#CE1449' : '#DDDDDD'
            }}
            onClick={() => {
              setDateState({
                startDate: null,
                endDate: null,
                focusedInput: START_DATE
              })
            }}
          >
            Set availability
          </div>

          <div className='btn-outline-pink'>Sync google calendar</div>
          <div className='close' onClick={() => setAvailabilityShow(false)}>
            <CloseIcon />
          </div>
        </div>
      )}
    </div>
  )
}

export default TopSection
