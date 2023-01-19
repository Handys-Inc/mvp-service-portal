import React from 'react'
import SimpleModal from '../../components/simplemodal/SimpleModal'
import Assistance from '../../features/home/assistance/Assistance'
import Bookings from '../../features/home/bookings/Bookings'
import EditProfile from '../../features/home/editprofile/EditProfile'
import JobProfile from '../../features/home/jobprofile/JobProfile'
import Resources from '../../features/home/resources/Resources'
import DefaultLayout from '../../layouts/DefaultLayout'
import Welcome from './../../features/home/welcome/Welcome'
import HomeContextProvider, { HomeContextConsumer } from './home.context'
import './home.scss'

function Home () {
  return (
    <HomeContextProvider>
      <HomeContextConsumer>
        {({
          editProfileShow,
          editProfileModalShow,
          setEditProfileModalShow
        }) => (
          <div id='home'>
            <SimpleModal
              id='edit-profile'
              title={'Edit Profile'}
              show={editProfileModalShow}
              onClose={() => setEditProfileModalShow(false)}
            >
              <EditProfile />
            </SimpleModal>
            <DefaultLayout>
              {editProfileShow && <JobProfile />}
              {!editProfileShow && (
                <>
                  <Welcome />
                  <Bookings />
                  <Assistance />
                  <Resources />
                </>
              )}
            </DefaultLayout>
          </div>
        )}
      </HomeContextConsumer>
    </HomeContextProvider>
  )
}

export default Home
