import React from 'react'
import './offers.style.scss'

function Offers () {
  return (
    <div id='offers'>
      <div className='offer'>
        <div className='d-flex'>
          <img src='/images/offers/offer_1.png' alt='' />
        </div>

        <p>
          Get 75% off for 3 months and stay in control of your finances with
          QuickBooks - the #1 accounting software for small businesses.{' '}
          <a>View Offer Terms</a>
        </p>

        <div className='button'>
          <div className='btn-outline-red'>Redeem offer</div>
        </div>
      </div>

      <div className='offer'>
        <div className='d-flex'>
          <img src='/images/offers/offer_2.png' alt='' />
        </div>

        <p>
          Open a BMO business bank account within 60 days of setting up your
          business. <a>Learn more</a>
        </p>

        <div className='button'>
          <div className='btn-outline-red'>Redeem offer</div>
        </div>
      </div>

      <div className='offer'>
        <div className='d-flex'>
          <img src='/images/offers/offer_3.png' alt='' />
        </div>

        <p>
          Start and manage your business online in one. Get 15% off your first
          business registration
        </p>

        <div className='button'>
          <div className='btn-outline-red'>Redeem offer</div>
        </div>
      </div>

      <div className='offer'>
        <div className='d-flex mb-1'>
          <img src='/images/offers/offer_4.png' alt='' />
        </div>

        <p>
          Get a 20 minute tax consultation with a Chartered Professional
          Accountant on how to maximize your tax savings
        </p>

        <div className='button'>
          <div className='btn-outline-red'>Redeem offer</div>
        </div>
      </div>
    </div>
  )
}

export default Offers
