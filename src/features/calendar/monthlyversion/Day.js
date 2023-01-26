import { useDay } from '@datepicker-react/hooks'
import React, { useRef } from 'react'
import { useDatepickerContext } from './datepicker.context'
import $ from 'jquery'
import { useCalendarContext } from '../../../pages/calendar/calendar.context'
import _ from 'lodash'

const COLORS_MAPS = {
  Painting: '#118468',
  Cleaning: '#F6AD1E'
}

const data = [
  {
    id: 0,
    image: '/images/profile-emojis/1.png',
    name: 'Jane Parker',
    subtitle: 'Booking completed',
    hasContract: true,
    type: 'Painting',
    date: new Date('01/03/2023'),
    message: 'Hello Alice, I’d like to know when you’ll be available'
  },
  {
    id: 1,
    image: '/images/profile-emojis/2.png',
    name: 'Jane Parker',
    type: 'Cleaning',
    subtitle: 'Booking completed',
    message: 'Hello Alice, I’d like to know when you’ll be available',
    date: new Date('01/02/2023'),
    hasContract: false
  },
  {
    id: 2,
    image: '/images/profile-emojis/3.png',
    name: 'Jane Parker',
    hasContract: true,
    type: 'Painting',
    date: new Date('01/03/2023'),
    subtitle: 'Booking completed',
    message: 'Hello Alice, I’d like to know when you’ll be available'
  }
]

function Day ({ dayLabel, date, days, index, old_month }) {
  const dayRef = useRef(null)
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover
  } = useDatepickerContext()

  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef
  })
  const { setContract, contract } = useCalendarContext()
  const { dateState } = useDatepickerContext()
  if (!dayLabel) {
    return <div id='day'></div>
  }

  const contracts = data.filter(x => {
    return x.date - date === 0
  })

  const openSide = x => {
    if (!_.isEmpty(contract)) {
      setContract({})
    } else setContract(x)
  }

  const isStartDate = date - dateState.startDate === 0
  const isEndDate = date - dateState.endDate === 0
  const withinRange = date >= dateState.startDate && date <= dateState.endDate

  console.log(date >= dateState.startDate && date <= dateState.endDate)
  return (
    <div
      id='day'
      style={{
        backgroundColor: withinRange
          ? 'rgba(20, 206, 94, 0.6)'
          : isStartDate
          ? 'rgba(81, 200, 114, 0.6)'
          : index % 7 === 0 || (index + 1) % 7 === 0
          ? '#F7F7F7'
          : '',
        color: old_month ? 'rgba(0, 0, 0, 0.5)' : ''
      }}
      ref={dayRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
    >
      {dayLabel}
      {!!contracts.length && (
        <div className='contracts'>
          {contracts.map((x, i) => (
            <div
              className='contract'
              onClick={() => {
                openSide(x)
              }}
              style={{
                backgroundColor: COLORS_MAPS[x.type]
              }}
            >
              <img src={x.image} alt='' />
              <h5>
                {x.name.split(' ')[0]} - {x.type}
              </h5>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Day
