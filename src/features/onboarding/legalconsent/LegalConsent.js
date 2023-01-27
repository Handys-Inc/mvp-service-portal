import React, { useState } from 'react'
import './legalconsent.style.scss'
import CheckBox from '../../../components/checkbox/CheckBox'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/jobprofile/Right.icon'
import {
  SECTIONS,
  useOnboardingContext
} from '../../../pages/onboarding/onboarding.context'

function LegalConsent () {
  const [agreement, setAgreement] = useState(false)
  const { setSection } = useOnboardingContext()
  return (
    <div id='legal-consent'>
      <h4>Legal Consent</h4>
      <p>
        By clicking you agree. you are consenting to Handys, its affiliates or
        partners obtaining your commercial driving record from ICBC. which is
        required to determine your qualification to provide Handy services.
        Records may be obtained on an annual or more frequent basis as required
        by law and consistent with Handys’ Privacy Policies for as long as you
        are affiliated with Handys
      </p>
      <div className='d-flex agreement align-items-center justify-content-between'>
        <span>I Agree</span>
        <CheckBox
          style={{
            border: '2px solid #282828',
            borderRadius: 3,
            width: 23,
            height: 23
          }}
          value={agreement}
          onChange={() => {
            setAgreement(!agreement)
          }}
        />
      </div>

      <div className='buttons'>
        <div
          className='btn-outline-red'
          onClick={() => {
            setSection('')
          }}
        >
          <LeftIcon />
          <span>Back</span>
        </div>
        <div
          className='btn-red'
          onClick={() => {
            setSection('')
          }}
        >
          <span>Next</span>
          <RightIcon />
        </div>
      </div>
    </div>
  )
}

export default LegalConsent
