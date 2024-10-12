import React from 'react'
import '../CSS/Sidebar.css';
import home from '../img/home.png';
import shorts from '../img/shorts.png'
import user from '../img/user_profile.jpg';
import history from '../img/history.png'
import subscription from '../img//subscriprion.png'
import playlist from '../img/library.png'
import yourvideo from '../img/yourvidos.png'
import watchlater from '../img/watch-later.png'
import like from '../img/like.png'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sortcut-links">
            <div className="side-links">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-links">
                <img src={shorts} alt="" /><p>Shorts</p>
            </div>
            <div className="side-links">
                <img src={subscription} alt="" /><p>Subscription</p>
            </div>
            <hr />
            <h3>You </h3>
            <div className="side-links">
                <img src={user} alt="" /><p>Your Channel</p>
            </div>
            <div className="side-links">
                <img src={history} alt="" /><p>History</p>
            </div>
            <div className="side-links">
                <img src={playlist} alt="" /><p>Playlist</p>
            </div>
            <div className="side-links">
                <img src={yourvideo} alt="" /><p>Your Videos</p>
            </div>
            <div className="side-links">
                <img src={watchlater} alt="" /><p>Watch Later</p>
            </div>
            <div className="side-links">
                <img src={like} alt="" /><p>Like Videos</p>
            </div>
        </div>
        <div className="subscribe-list">
            <h3>Subscribed</h3>
            <div className="side-links">
                <img src={user} alt="" /><p>Channel Name</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar