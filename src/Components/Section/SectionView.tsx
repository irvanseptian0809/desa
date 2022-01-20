import React from 'react'

import './styles.scss'

interface interfaceSectionView {
  title: string,
  children: React.ReactNode,
}

const SectionView = ({
  title,
  children,
}: interfaceSectionView) => {
  return (
    <div className="section">
      <div className="section-title">{title}</div>
      
      <div className="section-body">
        {children}
      </div>
      
    </div>
  )
}

export default SectionView