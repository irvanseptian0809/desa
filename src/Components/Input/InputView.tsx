import React from 'react'

import './styles.scss'

interface interfaceInputView {
  value: string,
  onChange: (e?: any) => void,
  placeholder: string,
}

const InputView = ({
  value,
  onChange,
  placeholder,
}: interfaceInputView) => {
  return (
    <div className="input-section">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  )
}

export default InputView