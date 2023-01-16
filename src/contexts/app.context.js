import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext({})

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}

export const AppContextConsumer = ({ children }) => {
  return (
    <AppContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'AppContextConsumer must be used within a AppContextProvider'
          )
        }
        return children(context)
      }}
    </AppContext.Consumer>
  )
}

export default AppContextProvider
