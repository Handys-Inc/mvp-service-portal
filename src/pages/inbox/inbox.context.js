import { createContext, useContext, useEffect, useState } from 'react'

const InboxContext = createContext({})

const InboxContextProvider = ({ children }) => {
  const [contract, setContract] = useState({})
  const [showDetails, setShowDetails] = useState(false)
  return (
    <InboxContext.Provider
      value={{
        showDetails,
        setShowDetails,
        contract,
        setContract
      }}
    >
      {children}
    </InboxContext.Provider>
  )
}

export const useInboxContext = () => {
  const context = useContext(InboxContext)
  if (context === undefined) {
    throw new Error(
      'useInboxContext must be used within a InboxContextProvider'
    )
  }
  return context
}

export const InboxContextConsumer = ({ children }) => {
  return (
    <InboxContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'InboxContextConsumer must be used within a InboxContextProvider'
          )
        }
        return children(context)
      }}
    </InboxContext.Consumer>
  )
}

export default InboxContextProvider
