import React from 'react'
import './inbox.scss'
import CustomersSection from './../../features/inbox/customersection/CustomersSection'
import InboxPlatform from '../../features/inbox/inboxplatform/InboxPlatform'
import DefaultLayout from '../../layouts/DefaultLayout'
import InboxContextProvider from './inbox.context'

function Inbox () {
  return (
    <InboxContextProvider>
      <div id='inbox'>
        <DefaultLayout>
          <div className='d-flex'>
            <CustomersSection />
            <InboxPlatform />
          </div>
        </DefaultLayout>
      </div>
    </InboxContextProvider>
  )
}

export default Inbox
