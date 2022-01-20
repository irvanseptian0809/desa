import React from 'react'
import './styles.scss'

interface interfaceButtonView {
  label: string,
  onClick?: () => void,
  size?: string,
  isFullWidth?: boolean,
  isDisabled?: boolean,
  type?: string,
}

const ButtonView = ({
  label,
  onClick,
  size = 'normal',
  isFullWidth = false,
  isDisabled,
  type = 'default',
}: interfaceButtonView) => {
  return (
    <button
      className={`button button-${size} button-${type} ${isFullWidth && 'full-width'} ${isDisabled && 'button-disabled'}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default ButtonView