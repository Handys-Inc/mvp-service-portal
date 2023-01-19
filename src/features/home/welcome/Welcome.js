import React from 'react'
import { useHomeContext } from '../../../pages/home/home.context'
import './welcome.style.scss'

function Welcome () {
  const { setEditProfileShow } = useHomeContext()
  return (
    <div id='welcome'>
      <h2>Welcome Username,</h2>

      <div
        className='btn-outline-pink'
        onClick={() => setEditProfileShow(true)}
      >
        Edit job profile
      </div>
    </div>
  )
}

export default Welcome
