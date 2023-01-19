import React from 'react'
import './checkbox.style.scss'
import { PINK_COLOR } from './../../constants/strings'

function CheckBox ({
  value,
  onChange,
  style,
  className,
  strokeColor,
  fillColor,
  baseColor,
  children
}) {
  return (
    <div
      id='checkbox'
      className={className}
      onClick={() => onChange(!value)}
      style={{
        ...style,
        borderColor: strokeColor,
        backgroundColor: value
          ? fillColor || PINK_COLOR
          : baseColor || 'transparent'
      }}
    >
      {value && children}
    </div>
  )
}

export const CHECKBOX = () => {
  return `<div
  id='checkbox'
  class='mx-2'
  style="background-color: transparent"
></div>`
}

export default CheckBox
