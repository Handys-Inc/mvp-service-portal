import React from 'react'
import { ENV } from '../../constants/env'
import {
  CALENDAR_PAGE,
  HOME_PAGE,
  INBOX_PAGE,
  PERKS_PAGE,
  TRANSACTIONS_PAGE
} from '../../constants/strings'
import NotificationIcon from '../../graphics/topheader/Notification.icon'
import './topheader.style.scss'

const PAGE_ROUTES = ['', 'inbox', 'calendar', 'transactions', 'perks']

const PAGE_TITLES = {
  [HOME_PAGE]: PAGE_ROUTES[0],
  [INBOX_PAGE]: PAGE_ROUTES[1],
  [CALENDAR_PAGE]: PAGE_ROUTES[2],
  [TRANSACTIONS_PAGE]: PAGE_ROUTES[3],
  [PERKS_PAGE]: PAGE_ROUTES[4]
}

function TopHeader () {
  const page = window.location.href.replace(ENV.SITE_URL, '').replace(' ', '')

  const getPageAction = (elem, index) => {
    const link = PAGE_TITLES[elem]
    console.log(link)
    return (
      <li className={`${link === page}`} onClick={() => {}} href key={index}>
        <a href={`${link}`}>{elem}</a>
      </li>
    )
  }
  return (
    <div id='top-header'>
      <a href className='logo'>
        <img src='/images/nav-logo.png' alt="Handy's Inc." />
      </a>

      <ul className='navigation-links'>
        {Object.keys(PAGE_TITLES).map((x, i) => getPageAction(x, i))}
      </ul>

      <div className='left-section'>
        <a className='switch'>Switch to customer portal</a>

        <a className='notification-icon'>
          <NotificationIcon />
        </a>
        <a className='profile-icon'>
          <img alt='' src='/images/profile-starter.png' />
        </a>
      </div>
    </div>
  )
}

export default TopHeader
