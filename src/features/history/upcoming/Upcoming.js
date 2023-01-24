import React, { useRef, useState } from 'react'
import DropDown from '../../../components/dropdown'
import DownIcon from '../../../icons/Down.icon'
import './upcoming.style.scss'
const LISTING_OPTIONS = ['All listings', 'Listing 1']
function Upcoming () {
  const dropRef = useRef()
  const [listings, setListings] = useState(LISTING_OPTIONS)
  const [listing, setListing] = useState(LISTING_OPTIONS[0])
  const [payouts, setPayouts] = useState([])

  return (
    <div id='upcoming'>
      <div className='dropdowns'>
        <DropDown
          ref={dropRef}
          id='start_date'
          toggleEvent={() => dropRef.current.getAlert('start_date')}
          textColor={'#282828'}
          onSelect={setListing}
          selectedValue={listing}
          backBtn={<DownIcon />}
          list={listings}
        />
      </div>

      <div className='line'>
        <span>Pending payouts: </span>
        <h4>0.00</h4>
      </div>

      <div className='payouts'>
        {!payouts.length && (
          <div className='empty-payout'>
            <h5>You do not have any upcoming payouts</h5>
            <p>For the listings, and payout method currently selected</p>
          </div>
        )}
        {!!payouts.length &&
          payouts.map((x, i) => (
            <div className='payout'>
              <div className='d-flex flex-column'>
                <h4>February, 2019</h4>
                <h5>Paypal</h5>
                <h5>HA789U8 Chemin De L' Albatros,Kamloops</h5>
              </div>
              <h5>Holding time: 24 hours</h5>
              <h5>$165 CAD</h5>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Upcoming
