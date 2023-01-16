import React from 'react'
import TopHeader from '../components/topheader/TopHeader'

function DefaultLayout ({ children }) {
  return (
    <>
      <div className='wrapper'>
        <TopHeader />
        {children}
      </div>
    </>
  )
}

export default DefaultLayout
