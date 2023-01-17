import React from 'react'
import Assistance from '../../features/home/assistance/Assistance'
import Bookings from '../../features/home/bookings/Bookings'
import Resources from '../../features/home/resources/Resources'
import DefaultLayout from '../../layouts/DefaultLayout'
import Welcome from './../../features/home/welcome/Welcome'
import './home.scss'

function Home () {
  return (
    <div id='home'>
      <DefaultLayout>
        <Welcome />
        <Bookings />
        <Assistance />
        <Resources />
      </DefaultLayout>
    </div>
  )
}

export default Home
