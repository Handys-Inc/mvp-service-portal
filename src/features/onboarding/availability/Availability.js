import React, { useEffect, useState } from 'react'
import './availability.style.scss'
import DownIcon from './../../../icons/Down.icon'
import { MONTHS, useDatepickerContext } from './datepicker.context'
import DropDown from '../../../components/dropdown'
import { useRef } from 'react'
import Month from './Month'
import LeftCaretIcon from '../../../icons/availability/LeftCaret.icon'
import RightCaretIcon from '../../../icons/availability/RightCaret.icon'
import {
  useOnboardingContext,
  PROFILE_VERSIONS
} from '../../../pages/onboarding/onboarding.context'

function Availability () {
  const [startMonth, setStartMonth] = useState(new Date().getMonth())
  const [endMonth, setEndMonth] = useState(new Date().getMonth())
  const {
    activeMonths,
    dateState,
    goToPreviousMonths,
    goToNextMonths,
    firstDayOfWeek
  } = useDatepickerContext()
  const { setProfileVersion, setAvailabilityObj } = useOnboardingContext()
  const [endMonths, setEndMonths] = useState([])
  const dropRef = useRef()
  useEffect(() => {
    if (activeMonths.length > 12) setEndMonths(activeMonths.splice(12, 24))

    return () => {}
  }, [])

  return (
    <div id='availibity'>
      <div className='a-header'>
        <h5>Pick a date or a date range</h5>
        <small>Availability can always be changed later</small>
      </div>

      <div className='d-flex flex-column align-items-center'>
        <div className='date-selections'>
          <div className='first-month'>
            <div className='month-header'>
              <DropDown
                ref={dropRef}
                id='end_day'
                toggleEvent={() => dropRef.current.getAlert('end_day')}
                textColor={'#282828'}
                onSelect={val => {
                  setStartMonth(MONTHS.indexOf(val))
                }}
                selectedValue={
                  MONTHS[startMonth] + ' ' + new Date().getFullYear()
                }
                backBtn={<DownIcon />}
                list={MONTHS}
              />

              <div className='buttons'>
                <a
                  href
                  className='pointer'
                  onClick={() => {
                    setStartMonth(startMonth === 0 ? 0 : startMonth - 1)
                  }}
                >
                  <LeftCaretIcon />
                </a>
                <a
                  href
                  className='pointer'
                  onClick={() => {
                    setStartMonth(startMonth === 11 ? 11 : startMonth + 1)
                  }}
                >
                  <RightCaretIcon />
                </a>
              </div>
            </div>
            <div className='month-body'>
              {[activeMonths[startMonth]].map(month => (
                <Month
                  goToPreviousMonths={goToPreviousMonths}
                  goToNextMonths={goToNextMonths}
                  key={`${month.year}-${month.month}`}
                  year={month.year}
                  month={month.month}
                  firstDayOfWeek={firstDayOfWeek}
                />
              ))}
            </div>
          </div>
          <div className='second-month'>
            <div className='month-header'>
              <DropDown
                ref={dropRef}
                id='end_day'
                toggleEvent={() => dropRef.current.getAlert('end_day')}
                textColor={'#282828'}
                onSelect={val => {
                  setEndMonth(MONTHS.indexOf(val))
                }}
                selectedValue={
                  MONTHS[endMonth] +
                  ' ' +
                  (parseInt(new Date().getFullYear()) + 1)
                }
                backBtn={<DownIcon />}
                list={MONTHS}
              />

              <div className='buttons'>
                <a
                  href
                  className='pointer'
                  onClick={() => {
                    setEndMonth(endMonth === 0 ? 0 : endMonth - 1)
                  }}
                >
                  <LeftCaretIcon />
                </a>
                <a
                  href
                  className='pointer'
                  onClick={() => {
                    setEndMonth(endMonth === 11 ? 11 : endMonth + 1)
                  }}
                >
                  <RightCaretIcon />
                </a>
              </div>
            </div>
            <div className='month-body'>
              {endMonths.length === 12
                ? [endMonths[endMonth]].map(month => (
                    <Month
                      goToPreviousMonths={goToPreviousMonths}
                      goToNextMonths={goToNextMonths}
                      key={`${month.year}-${month.month}`}
                      year={month.year}
                      month={month.month}
                      firstDayOfWeek={firstDayOfWeek}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className='button'>
          <div
            onClick={() => {
              setAvailabilityObj(dateState)
              setProfileVersion(PROFILE_VERSIONS[0])
            }}
            className='btn-red'
          >
            Set date
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availability
