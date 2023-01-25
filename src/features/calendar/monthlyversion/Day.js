import { useDay } from '@datepicker-react/hooks'
import React, { useRef } from 'react'
import { useDatepickerContext } from './datepicker.context'

function Day ({ dayLabel, date, days, index }) {
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

  if (!dayLabel) {
    return <div id='day'></div>
  }

  return (
    <div
      id='day'
      ref={dayRef}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
    >
      {dayLabel}
    </div>
  )
}

export default Day
