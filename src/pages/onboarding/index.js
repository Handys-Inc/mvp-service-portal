import React from 'react'
import Welcome from '../../features/onboarding/welcome/Welcome'
import EditProfile from '../../features/onboarding/editprofile/EditProfile'
import OnboardingLayout from '../../layouts/OnboardingLayout'
import OnboardingContextProvider, {
  OnboardingContextConsumer,
  SECTIONS
} from './onboarding.context'
import './onboarding.scss'
import LegalConsent from '../../features/onboarding/legalconsent/LegalConsent'
import SimpleModal from '../../components/simplemodal/SimpleModal'
import ConfirmAccount from '../../features/onboarding/confirmaccount/ConfirmAccount'
import EnterCode from '../../features/onboarding/entercode/EnterCode'

function Onboarding () {
  return (
    <OnboardingContextProvider>
      <OnboardingContextConsumer>
        {({
          section,
          confirmAccountShow,
          setConfirmAccountShow,
          enterCodeShow,
          setEnterCodeShow,
          availabilityModal,
          setAvailabilityModal
        }) => (
          <>
            <SimpleModal
              size={'sm'}
              id='confirm-account'
              hideHeader={true}
              show={confirmAccountShow}
              onClose={() => setConfirmAccountShow(false)}
            >
              <ConfirmAccount />
            </SimpleModal>
            <SimpleModal
              id='enter-code'
              size={'sm'}
              hideHeader={true}
              show={enterCodeShow}
              onClose={() => setEnterCodeShow(false)}
            >
              <EnterCode />
            </SimpleModal>
            <SimpleModal
              id='availability'
              size={'lg'}
              hideHeader={true}
              show={availabilityModal}
              onClose={() => setAvailabilityModal(false)}
            >
              <EnterCode />
            </SimpleModal>
            <div id='onboarding'>
              <OnboardingLayout>
                <div className='content'>
                  {section === '' && <Welcome />}
                  {section === SECTIONS[0] && <LegalConsent />}
                  {section === SECTIONS[1] && <EditProfile />}
                </div>
              </OnboardingLayout>
            </div>
          </>
        )}
      </OnboardingContextConsumer>
    </OnboardingContextProvider>
  )
}

export default Onboarding
