import React from "react";
import "../CSS/Playvideo.css";
import video1 from "../video/video-1.mp4";
import like from "../img/like.png";
import dislike from "../img/dislike.png";
import share from "../img/share.png";
import save from "../img/save.png";
import user from "../img/user_profile.jpg";

export const Playvideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Video Title</h3>
      <div className="playvideo-info">
        <p>1B View &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />
            15
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={user} alt="" />
        <div>
          <p>Channel Name</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          corrupti tempora nisi.
        </p>
        <hr />
        <h4>32 Comments</h4>
        <div className="comments">
          <img src={user} alt="" />
          <div>
            <h3>
              Username <span>1 day ago</span>
            </h3>
            <p>Nice Video</p>
            <div className="comment-action">
                <img src={like} alt="" />
                <span>12</span>
                <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user} alt="" />
          <div>
            <h3>
              Username <span>1 day ago</span>
            </h3>
            <p>Nice Video</p>
            <div className="comment-action">
                <img src={like} alt="" />
                <span>12</span>
                <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
