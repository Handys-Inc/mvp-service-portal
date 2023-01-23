import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { cloneElement } from 'react'
import { Children } from 'react'
import DownCaret from '../../icons/Caret.icon'
import './dropdown.style.scss'

const getMax = list => {
  if (!list) return
  if (list.length === 0) return
  const max = Math.max(...list)
  const index = list.indexOf(max)
  return index
}

const DropDown = forwardRef(
  (
    {
      id,
      version,
      toggleEvent,
      className,
      children,
      list,
      selectedValue,
      onSelect,
      bgColor,
      textColor,
      backBtn
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const array = Children.toArray(children)
    const length = list[getMax(list.map(x => x.length))]?.trim().length

    useImperativeHandle(ref, () => ({
      getAlert (target) {
        if (id !== target) setOpen(false)
      }
    }))

    return (
      <label id='drop-down' data-id={`${id}`} x-open={open ? 'open' : 'close'}>
        <div
          onClick={() => {
            setOpen(!open)
            // toggleEvent()
          }}
          className={`dd-button ${className ? className : ''}`}
          style={{
            background: bgColor
            // width: `calc(${length}ch + ${!!backBtn ? '32' : '20'}px)`
          }}
        >
          <span
            style={{
              color: textColor,
              marginLeft: selectedValue === 'Challenge' ? -8 : 0,
              zIndex: open ? 50001 : 300
            }}
          >
            {selectedValue}
          </span>
          {!!backBtn &&
            cloneElement(backBtn, {
              style: {
                zIndex: open ? 50001 : 300
              }
            })}
          {!backBtn && (
            <DownCaret
              color={textColor}
              style={{ zIndex: open ? 50001 : 300 }}
            />
          )}
        </div>
        {/* <input
        value={open}
        checked={open}
        // onChange={e => {
        //   setOpen(e.target.value)
        // }}
        type='checkbox'
        className='dd-input'
      /> */}
        <div
          style={{
            background: bgColor,
            zIndex: open ? 50000 : 300
          }}
          className='dd-menu'
        >
          {list
            .filter(x => x !== selectedValue)
            .map((value, index) => (
              <li
                className=''
                style={{ color: textColor, zIndex: open ? 50000 : 300 }}
                key={index}
                onClick={() => {
                  setOpen(!open)
                  onSelect(value, index)
                }}
              >
                {!children && <div>{value}</div>}
                {!!children &&
                  Children.map(array, (child, index) =>
                    cloneElement(child, { index, value })
                  )}
              </li>
            ))}
        </div>
      </label>
    )
  }
)

export default DropDown
