import _ from 'lodash'
import './upload.style.scss'
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { useOnboardingContext } from '../../../pages/onboarding/onboarding.context'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user'
}

function UploadProfilePhoto () {
  const [image, setImage] = useState({})
  const [picture, setPicture] = useState('')
  const [captureActive, setCaptureActive] = useState(false)
  const webcamRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const imgRef = React.useRef(null)
  const { setProfilePhotoObj, setSection } = useOnboardingContext()
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
    setCaptureActive(false)
  })

  const upload = evt => {
    const [file] = inputRef.current.files

    if (!!file) {
      setPicture(URL.createObjectURL(file))
    }
  }
  return (
    <div id='upload-profile-photo'>
      {!picture.length && (
        <>
          <h2>Take or upload your profile photo</h2>
          <p>
            Your profile photo helps people recognize you. Please note that once
            you submit your profile photo it cannot be changed.
          </p>
          <ol>
            <li>
              Face the camera directly with your eyes and mouth clearly visible
            </li>
            <li>
              Make sure the photo is well lit, free of glare, and in focus
            </li>
            <li>No photos of a photo, filters, or alterations</li>
          </ol>
          <div className='image'>
            {captureActive && (
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat='image/jpeg'
                videoConstraints={videoConstraints}
              />
            )}
            {!captureActive && (
              <div
                className='starter-img'
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${'/images/starter-img.png'})`
                }}
              ></div>
            )}
          </div>

          <div className='buttons'>
            <div className='btn-red pointer'>
              <input type='file' onChange={upload} ref={inputRef} />
              Upload photo
            </div>
            <div
              className='btn-outline-red pointer'
              onClick={() => {
                if (captureActive) capture()
                else setCaptureActive(true)
              }}
            >
              {captureActive ? 'Capture' : 'Take Photo'}
            </div>
          </div>
        </>
      )}
      {!!picture.length && (
        <>
          <h2>Profile photo</h2>
          <p>
            Your profile photo helps people recognize you. Please note that once
            you submit your profile photo it cannot be changed.
          </p>
          <div className='image'>
            <img className='uploaded-img' src={picture} ref={imgRef} alt='' />
          </div>
          {/* <img className='uploaded-img' src='/images/example-img.png' alt='' /> */}
          <div className='buttons'>
            <div
              className='btn-red pointer'
              onClick={() => {
                setProfilePhotoObj({ picture })
                setSection('')
              }}
            >
              Finish
            </div>
            <div className='btn-outline-red pointer'>
              Take Photo
              <input type='file' onChange={upload} ref={inputRef} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UploadProfilePhoto
