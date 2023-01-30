import _, { first } from 'lodash'
import React, { useState } from 'react'
import { useRef } from 'react'
import BackGraphic from '../../../graphics/uploadid/Back.graphic'
import FrontGraphic from '../../../graphics/uploadid/Front.graphic'
import { useOnboardingContext } from '../../../pages/onboarding/onboarding.context'
import './upload.style.scss'

function UploadID () {
  const [frontImage, setFrontImage] = useState({})
  const [backImage, setBackImage] = useState({})
  const [firstPicture, setFirstPicture] = useState('')
  const [lastPicture, setLastPicture] = useState('')
  const iref = useRef()
  const bref = useRef()
  const { setIDObj, setSection } = useOnboardingContext()
  const uploadFront = evt => {
    const [file] = iref.current.files

    if (!!file) {
      setFirstPicture(URL.createObjectURL(file))
      console.log(URL.createObjectURL(file))
      setFrontImage(file)
    }
  }
  const uploadBack = evt => {
    const [file] = evt.target.files
    console.log(file)
    if (!!file) {
      setLastPicture(URL.createObjectURL(file))
      setBackImage(file)
    }
  }
  console.log(backImage)
  console.log(lastPicture)
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
            {!firstPicture.length && (
              <>
                <FrontGraphic />
                <h5>Upload front</h5>
                <p>JPEG or PNG only</p>
              </>
            )}
            {!!firstPicture.length && (
              <>
                <img className='uploaded-img' src={firstPicture} alt='' />
              </>
            )}
          </div>
          <a>
            {' '}
            <input
              type='file'
              name='front'
              id='front'
              ref={iref}
              onChange={uploadFront}
            />
            Re-upload front
          </a>
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
            {!lastPicture.length && (
              <>
                <BackGraphic />
                <h5>Upload back</h5>
                <p>JPEG or PNG only</p>
              </>
            )}
            {!!lastPicture.length && (
              <>
                <img className='uploaded-img' src={lastPicture} alt='' />
              </>
            )}
          </div>
          <a>
            Re-upload back{' '}
            <input
              type='file'
              name='back'
              id='back'
              ref={bref}
              onChange={uploadBack}
            />
          </a>
        </div>
      </div>
      <div className='button'>
        <div
          onClick={() => {
            setIDObj({
              front: frontImage,
              back: backImage
            })
            setSection('')
          }}
          className='btn-red'
        >
          Finish
        </div>
      </div>
    </div>
  )
}

export default UploadID
