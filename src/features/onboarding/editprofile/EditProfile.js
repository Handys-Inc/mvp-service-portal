import React from 'react'
import {
  PROFILE_VERSIONS,
  useOnboardingContext
} from '../../../pages/onboarding/onboarding.context'
import JobProfile from '../jobprofile/JobProfile'
import SetupPaypal from '../setuppaypal/SetupPaypal'
import InteracEmail from '../interacemail/InteracEmail'
import './editprofile.style.scss'

function EditProfile () {
  const { profileVersion, setProfileVersion } = useOnboardingContext()
  return (
    <div id='edit-profile'>
      {profileVersion === PROFILE_VERSIONS[0] && <JobProfile />}
      {profileVersion === PROFILE_VERSIONS[1] && <SetupPaypal />}
      {profileVersion === PROFILE_VERSIONS[2] && <InteracEmail />}
    </div>
  )
}

export default EditProfile
