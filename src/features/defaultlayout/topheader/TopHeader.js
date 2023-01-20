import React, { useEffect, useState } from 'react'
import { ENV } from '../../../constants/env'
import {
  CALENDAR_PAGE,
  HOME_PAGE,
  INBOX_PAGE,
  PERKS_PAGE,
  TRANSACTIONS_PAGE
} from '../../../constants/strings'
import $ from 'jquery'
import NotificationIcon from '../../../graphics/topheader/Notification.icon'
import NotificationModal from '../notificationmodal/NotificationModal'
import './topheader.style.scss'
import ProfileMenu from '../profilemenu/ProfileMenu'

const PAGE_ROUTES = ['/', 'inbox', 'calendar', 'transactions', 'perks']

const PAGE_TITLES = {
  [HOME_PAGE]: PAGE_ROUTES[0],
  [INBOX_PAGE]: PAGE_ROUTES[1],
  [CALENDAR_PAGE]: PAGE_ROUTES[2],
  [TRANSACTIONS_PAGE]: PAGE_ROUTES[3],
  [PERKS_PAGE]: PAGE_ROUTES[4]
}

function TopHeader () {
  const page = window.location.href.replace(ENV.SITE_URL, '').replace(' ', '')
  const [showNotifications, setShowNotifications] = useState(false)
  const [profileMenuShow, setProfileMenuShow] = useState(false)
  const getPageAction = (elem, index) => {
    const link = PAGE_TITLES[elem]
    console.log(page)
    return (
      <li className={`${link === page}`} onClick={() => {}} href key={index}>
        <a href={`${link}`}>{elem}</a>
      </li>
    )
  }

  useEffect(() => {
    document.addEventListener('click', evt => {
      const flyoutEl = document.getElementById('notification-icon')
      let targetEl = evt.target // clicked element
      do {
        if (targetEl == flyoutEl) {
          // This is a click inside, does nothing, just return.
          return
        }
        // Go up the DOM
        targetEl = targetEl.parentNode
      } while (targetEl)
      // This is a click outside.
      setShowNotifications(false)
    })

    return () => {}
  }, [])

  return (
    <div id='top-header'>
      <a href className='logo'>
        <img src='/images/nav-logo.png' alt="Handy's Inc." />
      </a>

      <ul className='navigation-links'>
        {Object.keys(PAGE_TITLES).map((x, i) => getPageAction(x, i))}
      </ul>

      <div className='left-section'>
        <a href className='switch'>
          Switch to customer portal
        </a>

        <a href className='notification-icon' id='notification-icon' style={{}}>
          <NotificationIcon
            style={{
              border: showNotifications ? '1px solid #282828' : ''
            }}
            onClick={() => {
              setShowNotifications(!showNotifications)
            }}
          />
          {showNotifications && <NotificationModal />}
        </a>
        <a href className='profile-icon'>
          <div
            onClick={() => {
              setProfileMenuShow(!profileMenuShow)
            }}
            className='img'
          >
            <img alt='' src='/images/profile-starter.png' />
          </div>

          {profileMenuShow && <ProfileMenu />}
        </a>
      </div>
    </div>
  )
}

export default TopHeader
