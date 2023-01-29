import { useDay } from '@datepicker-react/hooks'
import React, { useRef } from 'react'
import { useDatepickerContext } from './datepicker.context'
import $ from 'jquery'

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

  const { dateState } = useDatepickerContext()
  if (!dayLabel) {
    return <div id='day'></div>
  }

  const contracts = data.filter(x => {
    return x.date - date === 0
  })

  const isStartDate = date - dateState.startDate === 0
  const isEndDate = date - dateState.endDate === 0
  const today = date - new Date().setHours(0, 0, 0, 0) === 0

  return (
    <div
      id='day'
      style={{}}
      ref={dayRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
    >
      {(isStartDate || isEndDate) && <div className='selected'></div>}
      {today && <div className='today'></div>}
      <span
        style={{
          color: isStartDate || isEndDate ? '#fff' : ''
        }}
      >
        {parseInt(dayLabel)}
      </span>
    </div>
  )
}

export default Day
