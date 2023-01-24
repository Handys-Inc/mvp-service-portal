import { createContext, useContext, useEffect, useState } from 'react'

const HistoryContext = createContext({})
export const TABS = ['completed', 'upcoming', 'gross']
const HistoryContextProvider = ({ children }) => {
  const [tab, setTab] = useState(TABS[0])
  return (
    <HistoryContext.Provider
      value={{
        tab,
        setTab
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export const useHistoryContext = () => {
  const context = useContext(HistoryContext)
  if (context === undefined) {
    throw new Error(
      'useHistoryContext must be used within a HistoryContextProvider'
    )
  }
  return context
}

export const HistoryContextConsumer = ({ children }) => {
  return (
    <HistoryContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'HistoryContextConsumer must be used within a HistoryContextProvider'
          )
        }
        return children(context)
      }}
    </HistoryContext.Consumer>
  )
}

export default HistoryContextProvider
