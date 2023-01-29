import _ from 'lodash'
import React, { useState } from 'react'
import { useRef } from 'react'
import BackGraphic from '../../../graphics/uploadid/Back.graphic'
import FrontGraphic from '../../../graphics/uploadid/Front.graphic'
import './upload.style.scss'

function UploadID () {
  const [frontImage, setFrontImage] = useState({})
  const [backImage, setBackImage] = useState({})
  const [firstPicture, setFirstPicture] = useState('')
  const [lastPicture, setLastPicture] = useState('')
  const iref = useRef()
  const bref = useRef()
  const uploadFront = evt => {
    const [file] = iref.current.files

    if (!!file) {
      setFirstPicture(URL.createObjectURL(file))
      setFrontImage(file)
    }
  }
  const uploadBack = evt => {
    const [file] = bref.current.files

    if (!!file) {
      setLastPicture(URL.createObjectURL(file))
      setBackImage(file)
    }
  }
  return (
    <div id='upload-id'>
      <h2>Upload photos of your ID card</h2>
      <p>
        Make sure your photos aren’t blurry and the front of your identity card
        clearly shows your face.
      </p>
      <div className='uploads'>
        <div className='upload-section'>
          <div className='upload'>
            <input
              type='file'
              name='front'
              id='front'
              ref={iref}
              onChange={uploadFront}
            />
            {_.isEmpty(frontImage) && (
              <>
                <FrontGraphic />
                <h5>Upload front</h5>
                <p>JPEG or PNG only</p>
              </>
            )}
            {!_.isEmpty(frontImage) && (
              <>
                <img className='uploaded-img' src={firstPicture} alt='' />
              </>
            )}
          </div>
          <a>Re-upload front</a>
        </div>
        <div className='upload-section'>
          <div className='upload'>
            <input
              type='file'
              name='back'
              id='back'
              ref={bref}
              onChange={uploadBack}
            />
            {_.isEmpty(backImage) && (
              <>
                <BackGraphic />
                <h5>Upload back</h5>
                <p>JPEG or PNG only</p>
              </>
            )}
            {!_.isEmpty(backImage) && (
              <>
                <img className='uploaded-img' src={lastPicture} alt='' />
              </>
            )}
          </div>
          <a>Re-upload back</a>
        </div>
      </div>
      <div className='button'>
        <div className='btn-red'>Finish</div>
      </div>
    </div>
  )
}

export default UploadID
