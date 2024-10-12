import React from 'react'
import '../CSS/Video.css'
import { Playvideo } from '../components/Playvideo'
import Recomended from '../components/Recomended'

function Video() {
  return (
    <div>
      <div className="play-container">
        <Playvideo/>
        <Recomended/>
      </div>
    </div>
  )
}

export default Video