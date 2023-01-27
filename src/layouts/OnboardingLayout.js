import React from 'react'
import LogoIcon from './../icons/Logo.icon'

function OnboardingLayout ({ children }) {
  return (
    <>
      <div className='wrapper'>
        <div id='onboarding-header'>
          <a href className='logo'>
            <LogoIcon />
          </a>
        </div>
        {children}
      </div>
    </>
  )
}

export default OnboardingLayout
