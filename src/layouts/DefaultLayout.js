import React from 'react'
import TopHeader from '../features/defaultlayout/topheader/TopHeader'

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
