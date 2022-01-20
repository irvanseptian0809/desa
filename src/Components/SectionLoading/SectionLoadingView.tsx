import React from 'react'

import './styles.scss'

interface interfaceSectionLoadingView {
  type?: string,
  isFullWidth?: boolean,
}

const SectionLoadingView = ({
  type = 'default',
  isFullWidth = false,
}: interfaceSectionLoadingView) => {
  const defaultLoading = "https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif"
  const catchLoading = "https://cdn.dribbble.com/users/276865/screenshots/2897070/pok1.gif"

  return (
    <div className="section-loading">
      <img
        src={type === 'default' ? defaultLoading : catchLoading}
        alt={type}
        className={`${isFullWidth ? 'loading-img-full' : 'loading-img'}`}
      />

      <div className="loading-title">
        {type === 'default' ? 'Loading ...' : 'Try to catch pokemon...'}
      </div>
    </div>
  )
}

export default SectionLoadingView