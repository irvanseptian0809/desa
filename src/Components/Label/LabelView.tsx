import React from 'react'

import './styles.scss'

interface interfaceLabelView {
  label: string,
  color?: string,
}

const LabelView = ({
  label,
  color = 'green'
}: interfaceLabelView) => {
  return (
    <span className={`label label-${color}`}>{label}</span>
  )
}

export default LabelView