import { createContext, useContext, useEffect, useState } from 'react'
import { MONTHS } from '../../features/calendar/monthlyversion/datepicker.context'

const CalendarContext = createContext({})
export const VERSIONS = ['monthly', 'yearly']
const CalendarContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [contract, setContract] = useState({})
  const [shownMonth, setShownMonth] = useState(MONTHS[0])
  const [timeVersion, setTimeVersion] = useState(VERSIONS[0])
  return (
    <CalendarContext.Provider
      value={{
        shownMonth,
        setShownMonth,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        contract,
        setContract,
        timeVersion,
        setTimeVersion
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => {
  const context = useContext(CalendarContext)
  if (context === undefined) {
    throw new Error(
      'useCalendarContext must be used within a CalendarContextProvider'
    )
  }
  return context
}

export const CalendarContextConsumer = ({ children }) => {
  return (
    <CalendarContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'CalendarContextConsumer must be used within a CalendarContextProvider'
          )
        }
        return children(context)
      }}
    </CalendarContext.Consumer>
  )
}

export default CalendarContextProvider
