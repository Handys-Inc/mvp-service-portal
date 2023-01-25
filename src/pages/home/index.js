import React from 'react'
import FullPageModal from '../../components/fullpagemodal/FullPageModal'
import SimpleModal from '../../components/simplemodal/SimpleModal'
import Article from '../../features/home/article/Article'
import Assistance from '../../features/home/assistance/Assistance'
import Bookings from '../../features/home/bookings/Bookings'
import ConfirmAccount from '../../features/home/confirmaccount/ConfirmAccount'
import EditProfile from '../../features/home/editprofile/EditProfile'
import EnterCode from '../../features/home/entercode/EnterCode'
import InteracEmail from '../../features/home/interacemail/InteracEmail'
import JobProfile from '../../features/home/jobprofile/JobProfile'
import Resources from '../../features/home/resources/Resources'
import SetupPaypal from '../../features/home/setuppaypal/SetupPaypal'
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
          setEditProfileModalShow,
          setupPaypalShow,
          setSetupPaypalShow,
          confirmAccountShow,
          setConfirmAccountShow,
          enterCodeShow,
          setEnterCodeShow,
          interacEmailShow,
          setInteracEmailShow,
          articleShow,
          setArticleShow
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
            <SimpleModal
              id='setup-payout'
              title={'Who owns this PayPal account?'}
              show={setupPaypalShow}
              onClose={() => setSetupPaypalShow(false)}
            >
              <SetupPaypal />
            </SimpleModal>
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
              id='interac-email'
              title={'Please type in your Interac email'}
              show={interacEmailShow}
              onClose={() => setInteracEmailShow(false)}
            >
              <InteracEmail />
            </SimpleModal>
            <FullPageModal
              id='article'
              show={articleShow}
              onClose={() => setArticleShow(false)}
            >
              <Article />
            </FullPageModal>
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
