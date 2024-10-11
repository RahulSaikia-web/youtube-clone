import React from 'react'
import '../CSS/Sidebar.css';
import home from '../img/home.png';
import game from '../img/game_icon.png';
import automobile from '../img/automobiles.png';
import sports from '../img/sports.png';
import entertaintment from '../img/entertainment.png';
import tech from '../img/tech.png';
import music from '../img/music.png';
import news from '../img/news.png';
import user from '../img/user_profile.jpg';


function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sortcut-links">
            <div className="side-links">
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className="side-links">
                <img src={game} alt="" /><p>Games</p>
            </div> <div className="side-links">
                <img src={automobile} alt="" /><p>Automobile</p>
            </div> <div className="side-links">
                <img src={sports} alt="" /><p>Sports</p>
            </div> <div className="side-links">
                <img src={entertaintment} alt="" /><p>Entertainment</p>
            </div> <div className="side-links">
                <img src={news} alt="" /><p>News</p>
            </div> <div className="side-links">
                <img src={tech} alt="" /><p>Technology</p>
            </div> <div className="side-links">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <hr />
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