import React, { Children, cloneElement } from 'react'
import './fullpagemodal.style.scss'
import { useAppContext } from '../../contexts/app.context'
import CloseIcon from '../../icons/Close.icon'
import { useState } from 'react'

function FullPageModal ({
  title,
  onClose,
  show,
  children,
  bgColor,

  showClose,
  id,
  closeBtnColor
}) {
  const { currentTheme } = useAppContext()
  const array = Children.toArray(children)
  const [onBack, setBackButtonFunction] = useState(null)
  return (
    show && (
      <div id='full-page-modal' data-id={`${id}`} theme={currentTheme}>
        <div
          onClick={() => {
            onClose()
          }}
          className='underlying-background'
        ></div>
        <div
          className='modal-content'
          style={{
            background: currentTheme === 'dark' ? '#141414' : bgColor
          }}
        >
          {showClose && (
            <div
              onClick={() => {
                onClose()
              }}
              className='modal-close'
            >
              <CloseIcon strokeColor={closeBtnColor} />
            </div>
          )}

          <div className='modal-body'>
            {Children.map(array, (child, index) =>
              cloneElement(child, {
                title,
                onClose,
                show,
                setBackButtonFunction
              })
            )}
          </div>
        </div>
      </div>
    )
  )
}

FullPageModal.defaultProps = {
  showHeader: true,
  showClose: true
}

export default FullPageModal
