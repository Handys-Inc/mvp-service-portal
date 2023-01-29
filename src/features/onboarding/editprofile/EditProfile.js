import React from 'react'
import {
  PROFILE_VERSIONS,
  useOnboardingContext
} from '../../../pages/onboarding/onboarding.context'
import JobProfile from '../jobprofile/JobProfile'
import SetupPaypal from '../setuppaypal/SetupPaypal'
import InteracEmail from '../interacemail/InteracEmail'
import './editprofile.style.scss'
import Availability from '../availability/Availability'
import DatepickerContextProvider from '../availability/datepicker.context'

function EditProfile () {
  const { profileVersion } = useOnboardingContext()
  return (
    <div id='edit-profile'>
      {profileVersion === PROFILE_VERSIONS[0] && <JobProfile />}
      {profileVersion === PROFILE_VERSIONS[1] && <SetupPaypal />}
      {profileVersion === PROFILE_VERSIONS[2] && <InteracEmail />}
      {profileVersion === PROFILE_VERSIONS[3] && (
        <DatepickerContextProvider>
          <Availability />
        </DatepickerContextProvider>
      )}
    </div>
  )
}

export default EditProfile
