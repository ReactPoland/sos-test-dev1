import React, { PropTypes } from 'react'
import './ProgressTrip.scss'

const ProgressTrip = ({ progress }) => {
  let currentProgress = progress
  if (currentProgress > 100) currentProgress = 100
  if (currentProgress < 0) currentProgress = 0

  return (
    <div className='progress-trip'>
      <div className='progress-trip-fill' style={{ width: `${currentProgress}%` }} />
    </div>
  )
}

ProgressTrip.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressTrip
