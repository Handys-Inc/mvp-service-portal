import { createContext, useContext, useEffect, useState } from 'react'

const CalendarContext = createContext({})
export const VERSIONS = ['monthly', 'yearly']
const CalendarContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [timeVersion, setTimeVersion] = useState(VERSIONS[0])
  return (
    <CalendarContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
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
