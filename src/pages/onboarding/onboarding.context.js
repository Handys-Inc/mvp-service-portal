import { createContext, useContext, useEffect, useState } from 'react'

const OnboardingContext = createContext({})
export const SECTIONS = [
  'Legal agreement',
  'Job profile',
  'Profile photo',
  'Upload your ID',
  'Three photos of previously completed jobs'
]
export const PROFILE_VERSIONS = ['Job Profile', 'Setup Paypal', 'Interac Email']
const OnboardingContextProvider = ({ children }) => {
  const [section, setSection] = useState('')
  const [profileVersion, setProfileVersion] = useState(PROFILE_VERSIONS[0])
  const [paypalObj, setPaypalObj] = useState({})
  const [interacObj, setInteracObj] = useState({})
  const [availabilityModal, setAvailabilityModal] = useState(false)
  const [confirmAccountShow, setConfirmAccountShow] = useState(false)
  const [enterCodeShow, setEnterCodeShow] = useState(false)
  return (
    <OnboardingContext.Provider
      value={{
        confirmAccountShow,
        setConfirmAccountShow,
        enterCodeShow,
        setEnterCodeShow,
        section,
        setSection,
        paypalObj,
        setPaypalObj,
        interacObj,
        setInteracObj,
        profileVersion,
        setProfileVersion,
        availabilityModal,
        setAvailabilityModal
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error(
      'useOnboardingContext must be used within a OnboardingContextProvider'
    )
  }
  return context
}

export const OnboardingContextConsumer = ({ children }) => {
  return (
    <OnboardingContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error(
            'OnboardingContextConsumer must be used within a OnboardingContextProvider'
          )
        }
        return children(context)
      }}
    </OnboardingContext.Consumer>
  )
}

export default OnboardingContextProvider
