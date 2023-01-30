import React from 'react'
import './perks.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import PerksContextProvider from './perks.context'
import TopLanding from '../../features/perks/toplanding/TopLanding'
import Offers from '../../features/perks/offers/Offers'

function Perks () {
  return (
    <PerksContextProvider>
      <div id='perks'>
        <DefaultLayout>
          <TopLanding />
          <Offers />
        </DefaultLayout>
      </div>
    </PerksContextProvider>
  )
}

export default Perks
