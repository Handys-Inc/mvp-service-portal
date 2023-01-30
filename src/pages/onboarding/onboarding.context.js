import { createContext, useContext, useEffect, useState } from 'react'

const OnboardingContext = createContext({})
export const SECTIONS = [
  'Legal agreement',
  'Job profile',
  'Profile photo',
  'Upload your ID',
  'Three photos of previously completed jobs'
]
export const PROFILE_VERSIONS = [
  'Job Profile',
  'Setup Paypal',
  'Interac Email',
  'Availability'
]
const OnboardingContextProvider = ({ children }) => {
  const [section, setSection] = useState('')
  const [profileVersion, setProfileVersion] = useState(PROFILE_VERSIONS[0])
  const [paypalObj, setPaypalObj] = useState({})
  const [agreementObj, setAgreementObj] = useState({})
  const [profileObj, setProfileObj] = useState({})
  const [photosObj, setPhotoObj] = useState({})
  const [profilePhotoObj, setProfilePhotoObj] = useState({})
  const [availabilityObj, setAvailabilityObj] = useState({})
  const [interacObj, setInteracObj] = useState({})
  const [idObj, setIDObj] = useState({})
  const [availabilityModal, setAvailabilityModal] = useState(false)
  const [confirmAccountShow, setConfirmAccountShow] = useState(false)
  const [enterCodeShow, setEnterCodeShow] = useState(false)
  return (
    <OnboardingContext.Provider
      value={{
        agreementObj,
        setAgreementObj,
        idObj,
        setIDObj,
        photosObj,
        setPhotoObj,
        profilePhotoObj,
        setProfilePhotoObj,
        profileObj,
        setProfileObj,
        availabilityObj,
        setAvailabilityObj,
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
