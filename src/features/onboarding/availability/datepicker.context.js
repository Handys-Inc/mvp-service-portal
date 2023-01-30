import { START_DATE, useDatepicker } from '@datepicker-react/hooks'
import React from 'react'

import { createContext, useContext, useEffect, useState } from 'react'

const DatepickerContext = createContext({})
export const MONTHS = [
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
const DatepickerContextProvider = ({ children }) => {
  const [dateState, setDateState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE
  })
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths
  } = useDatepicker({
    numberOfMonths: 24,
    startDate: dateState.startDate,
    endDate: dateState.endDate,
    focusedInput: dateState.focusedInput,
    onDatesChange: handleDateChange
  })
  const [availabilityShow, setAvailabilityShow] = useState(false)

  function handleDateChange (data) {
    if (!data.focusedInput) {
      setDateState({ ...data, focusedInput: START_DATE })
    } else {
      setDateState(data)
    }
  }

  return (
    <DatepickerContext.Provider
      value={{
        availabilityShow,
        setAvailabilityShow,
        activeMonths,
        dateState,
        setDateState,
        handleDateChange,
        firstDayOfWeek,
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
        goToPreviousMonths,
        goToNextMonths
      }}
    >
      {children}
    </DatepickerContext.Provider>
  )
}

export const useDatepickerContext = () => {
  const context = useContext(DatepickerContext)
  if (context === undefined) {
    throw new Error(
      'useDatepickerContext must be used within a DatepickerContextProvider'
    )
  }
  return context
}

export const DatepickerContextConsumer = ({ children }) => {
  return (
    <DatepickerContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'DatepickerContextConsumer must be used within a DatepickerContextProvider'
          )
        }
        return children(context)
      }}
    </DatepickerContext.Consumer>
  )
}

export default DatepickerContextProvider
