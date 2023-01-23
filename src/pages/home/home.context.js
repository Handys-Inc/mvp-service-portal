import { createContext, useContext, useEffect, useState } from 'react'

const HomeContext = createContext({})

const HomeContextProvider = ({ children }) => {
  const [setupPaypalShow, setSetupPaypalShow] = useState(false)
  const [editProfileShow, setEditProfileShow] = useState(false)
  const [confirmAccountShow, setConfirmAccountShow] = useState(false)
  const [enterCodeShow, setEnterCodeShow] = useState(false)
  const [articleId, setArticleId] = useState()
  const [articleShow, setArticleShow] = useState(false)
  const [interacEmailShow, setInteracEmailShow] = useState(false)
  const [editProfileModalShow, setEditProfileModalShow] = useState(false)
  return (
    <HomeContext.Provider
      value={{
        articleShow,
        setArticleShow,
        articleId,
        setArticleId,
        editProfileShow,
        setEditProfileShow,
        editProfileModalShow,
        setEditProfileModalShow,
        setupPaypalShow,
        setSetupPaypalShow,
        confirmAccountShow,
        setConfirmAccountShow,
        enterCodeShow,
        setEnterCodeShow,
        interacEmailShow,
        setInteracEmailShow
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
