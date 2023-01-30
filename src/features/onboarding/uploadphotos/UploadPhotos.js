import React, { useState } from 'react'
import { useRef } from 'react'
import { useOnboardingContext } from '../../../pages/onboarding/onboarding.context'
import './upload.style.scss'

function UploadPhotos () {
  const [files, setFiles] = useState([])
  const [fileLinks, setFileLinks] = useState([])
  const inputRef = useRef()
  const { setSection, setPhotoObj } = useOnboardingContext()
  const uploads = evt => {
    const files = evt.target.files

    if (!!files.length) {
      setFileLinks(
        Object.values(files)
          .slice(0, 3)
          .map((x, i) => URL.createObjectURL(x))
      )

      setFiles(Object.values(files).slice(0, 3))
    }
  }
  console.log(fileLinks)
  return (
    <div id='upload-photos'>
      <h2>Take or upload your profile photo</h2>
      <p>
        Your profile photo helps people recognize you. Please note that once you
        submit your profile photo it cannot be changed.
      </p>
      <ol>
        <li>
          Face the camera directly with your eyes and mouth clearly visible
        </li>
        <li>Make sure the photo is well lit, free of glare, and in focus</li>
        <li>No photos of a photo, filters, or alterations</li>
      </ol>

      <div className='uploads'>
        <input type='file' multiple onChange={uploads} />
        <div
          className='upload'
          style={{
            border: !files[0] ? '2px dashed #626262' : ''
          }}
        >
          {!!files[0] && (
            <div
              className='starter-img'
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${fileLinks[0]})`
              }}
            ></div>
          )}
          {!files[0] && (
            <>
              <h5>Upload back</h5>
              <p>JPEG or PNG only</p>
            </>
          )}
        </div>
        <div
          className='upload'
          style={{
            border: !files[1] ? '2px dashed #626262' : ''
          }}
        >
          {!!files[1] && (
            <div
              className='starter-img'
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${fileLinks[1]})`
              }}
            ></div>
          )}
          {!files[1] && (
            <>
              <h5>Upload back</h5>
              <p>JPEG or PNG only</p>
            </>
          )}
        </div>
        <div
          className='upload'
          style={{
            border: !files[2] ? '2px dashed #626262' : ''
          }}
        >
          {!!files[2] && (
            <div
              className='starter-img'
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${fileLinks[2]})`
              }}
            ></div>
          )}
          {!files[2] && (
            <>
              <h5>Upload back</h5>
              <p>JPEG or PNG only</p>
            </>
          )}
        </div>
      </div>

      <div className='button'>
        <div
          className='btn-red pointer'
          onClick={() => {
            if (!!files.length) {
              setPhotoObj({ images: files })
              setSection('')
            }
          }}
        >
          Upload photos
        </div>
      </div>
    </div>
  )
}

export default UploadPhotos
