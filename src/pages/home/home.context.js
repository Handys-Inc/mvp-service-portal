import { createContext, useContext, useEffect, useState } from 'react'

const HomeContext = createContext({})

const HomeContextProvider = ({ children }) => {
  const [editProfileShow, setEditProfileShow] = useState(false)
  const [editProfileModalShow, setEditProfileModalShow] = useState(false)
  return (
    <HomeContext.Provider
      value={{
        editProfileShow,
        setEditProfileShow,
        editProfileModalShow,
        setEditProfileModalShow
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}

export const useHomeContext = () => {
  const context = useContext(HomeContext)
  if (context === undefined) {
    throw new Error('useHomeContext must be used within a HomeContextProvider')
  }
  return context
}

export const HomeContextConsumer = ({ children }) => {
  return (
    <HomeContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'HomeContextConsumer must be used within a HomeContextProvider'
          )
        }
        return children(context)
      }}
    </HomeContext.Consumer>
  )
}

export default HomeContextProvider
