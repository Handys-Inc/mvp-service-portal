import React, { Children, cloneElement, useEffect, useState } from 'react'
import './simplemodal.style.scss'
import CloseIcon from '../../icons/Close.icon'
import { useAppContext } from '../../contexts/app.context'

function SimpleModal ({
  title,
  onClose,
  show,
  children,
  id,
  bgColor,
  size,
  closeBtnColor,
  hideHeader
}) {
  const { currentTheme } = useAppContext()
  const array = Children.toArray(children)
  const [modalTitle, setModalTitle] = useState('')
  const [onBack, setBackButtonFunction] = useState(null)

  useEffect(() => {
    setModalTitle(title)

    return () => {}
  }, [])

  return (
    show && (
      <div id='simple-modal' theme={currentTheme} data-id={`${id}`}>
        <div
          onClick={() => {
            onClose()
          }}
          className='underlying-background'
        ></div>
        <div
          className={`modal-content ${size}`}
          style={{
            background: bgColor
          }}
        >
          {!hideHeader && (
            <div className='modal-header'>
              <h1>{title}</h1>
              {/* {!!onBack && (
              <div
                onClick={() => {
                  onBack()
                }}
                className='modal-back'
              >
                <CaretIcon color={currentTheme === 'dark' ? '#fff' : '#000'} />
              </div>
            )} */}

              <div
                onClick={() => {
                  onClose()
                }}
                className='modal-close'
              >
                <CloseIcon strokeColor={closeBtnColor} />
              </div>
            </div>
          )}

          <div className='modal-body'>
            {Children.map(array, (child, index) =>
              cloneElement(child, {
                title,
                onClose,
                show,
                modalTitle,
                setModalTitle,
                setBackButtonFunction
              })
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default SimpleModal
