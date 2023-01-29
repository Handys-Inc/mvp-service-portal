import React from 'react'
import ArrowRightIcon from '../../../icons/welcome/ArrowRight.icon'
import JobIcon from '../../../icons/welcome/Job.icon'
import LegalIcon from '../../../icons/welcome/Legal.icon'
import ProfileIcon from '../../../icons/welcome/Profile.icon'
import SettingsIcon from '../../../icons/welcome/Settings.icon'
import UploadIcon from '../../../icons/welcome/Upload.icon'
import {
  useOnboardingContext,
  SECTIONS
} from '../../../pages/onboarding/onboarding.context'
import './welcome.style.scss'

function Welcome () {
  const { setSection } = useOnboardingContext()
  return (
    <div id='welcome'>
      <div className='w-header d-flex flex-column align-items-center'>
        <h2>Welcome Username,</h2>
        <p>Complete the required next steps to set up your account</p>
      </div>

      <div className='sections'>
        <div className='section'>
          <div className='d-flex'>
            <LegalIcon />

            <div className='d-flex flex-column'>
              <h4>Legal agreement</h4>
              <span className='red'>Recommended next step</span>
            </div>
          </div>
          <a
            href
            onClick={() => {
              setSection(SECTIONS[0])
            }}
          >
            <ArrowRightIcon />
          </a>
        </div>
        <div className='section'>
          <div className='d-flex'>
            <SettingsIcon />

            <div className='d-flex flex-column'>
              <h4>Job profile</h4>
              <span>Get started</span>
            </div>
          </div>
          <a
            href
            onClick={() => {
              setSection(SECTIONS[1])
            }}
          >
            <ArrowRightIcon />
          </a>
        </div>
        <div className='section'>
          <div className='d-flex'>
            <ProfileIcon />

            <div className='d-flex flex-column'>
              <h4>Profile photo</h4>
              <span>Get started</span>
            </div>
          </div>
          <a
            href
            onClick={() => {
              setSection(SECTIONS[2])
            }}
          >
            <ArrowRightIcon />
          </a>
        </div>
        <div className='section'>
          <div className='d-flex'>
            <UploadIcon />

            <div className='d-flex flex-column'>
              <h4>Upload your ID</h4>
              <span>Get started</span>
            </div>
          </div>
          <a
            href
            onClick={() => {
              setSection(SECTIONS[3])
            }}
          >
            <ArrowRightIcon />
          </a>
        </div>
        <div className='section'>
          <div className='d-flex'>
            <JobIcon />

            <div className='d-flex flex-column'>
              <h4>Three photos of previously completed jobs</h4>
              <span>Get started</span>
            </div>
          </div>
          <a
            href
            onClick={() => {
              setSection(SECTIONS[4])
            }}
          >
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Welcome
