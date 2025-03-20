import React from "react";
import "./blog.css";

const VideoCard = ({ item }) => {
  return (
    <div className="video-card">
      <div className="video">
        <video controls onClick={(e) => e.stopPropagation()}>
          <source src={item.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="text">
        <span>{item.date}</span>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div> */}
    </div>
  );
};

export default VideoCard;
