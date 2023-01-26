import { useDay } from '@datepicker-react/hooks'
import React, { useRef } from 'react'
import { useDatepickerContext } from '../monthlyversion/datepicker.context'

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
    onDateHover,
    dateState
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
  const isStartDate = date - dateState.startDate === 0
  const isEndDate = date - dateState.endDate === 0
  const withinRange = date >= dateState.startDate && date <= dateState.endDate

  return (
    <div
      id='day'
      style={{
        // backgroundColor:
        //   index % 7 === 0 || (index + 1) % 7 === 0 ? '#F7F7F7' : '',
        // backgroundColor:
        //   index % 7 === 0 || (index + 1) % 7 === 0 ? '#F7F7F7' : '',
        color:
          (index + 2) % 7 === 0 || (index + 1) % 7 === 0
            ? old_month
              ? 'rgba(206, 20, 73, 0.5)'
              : 'rgba(206, 20, 73, 1)'
            : old_month
            ? 'rgba(0,0,0,0.5)'
            : '#000'
        // color: old_month
        //   ? `rgba($color:${
        //       index % 7 === 0 || (index + 1) % 7 === 0 ? '#CE1449' : '#282828'
        //     }, $alpha: 0.5)`
        //   : '#282828'
      }}
      ref={dayRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
    >
      {withinRange && <div className='pink-bg'></div>}

      {isStartDate && <div className='left-white-bg'></div>}
      {isEndDate && <div className='right-white-bg'></div>}

      {(isStartDate || isEndDate) && <div className='red-circle'></div>}
      <span>{dayLabel}</span>
    </div>
  )
}

export default Day
