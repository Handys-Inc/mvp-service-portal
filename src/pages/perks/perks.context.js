import { createContext, useContext, useEffect, useState } from 'react'

const PerksContext = createContext({})

const PerksContextProvider = ({ children }) => {
  return <PerksContext.Provider value={{}}>{children}</PerksContext.Provider>
}

export const usePerksContext = () => {
  const context = useContext(PerksContext)
  if (context === undefined) {
    throw new Error(
      'usePerksContext must be used within a PerksContextProvider'
    )
  }
  return context
}

export const PerksContextConsumer = ({ children }) => {
  return (
    <PerksContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'PerksContextConsumer must be used within a PerksContextProvider'
          )
        }
        return children(context)
      }}
    </PerksContext.Consumer>
  )
}

export default PerksContextProvider
