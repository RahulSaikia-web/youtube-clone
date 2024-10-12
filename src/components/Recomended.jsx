import React from 'react'
import '../CSS/Recomended.css'
import thumbnail from '../img/thumbnail.png'
import { Link } from 'react-router-dom'
const Recomended = () => {
  return (
    <div className="recomended">
        <div className="side-video-list">
            <img src={thumbnail} alt="" />
            <Link to={`/video/20/222`} className="video-info">
                <h4>Video Title</h4> 
                <p>Channel Name</p>
                <p>188k Vies</p>
            </Link>
        </div>
        <Link to={`/video/20/222`} className="side-video-list">
            <img src={thumbnail} alt="" />
            <div className="video-info">
                <h4>Video Title</h4>
                <p>Channel Name</p>
                <p>188K Views</p>
            </div>
        </Link> <div className="side-video-list">
            <img src={thumbnail} alt="" />
            <div className="video-info">
                <h4>Video Title</h4>
                <p>Channel Name</p>
                <p>188K Views</p>
            </div>
        </div> <Link to={`/video/20/222`} className="side-video-list">
            <img src={thumbnail} alt="" />
            <div className="video-info">
                <h4>Video Title</h4>
                <p>Channel Name</p>
                <p>188K Views</p>
            </div>
        </Link>
    </div>
  )
}

export default Recomended