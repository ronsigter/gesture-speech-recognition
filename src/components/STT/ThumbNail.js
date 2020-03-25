import React from "react";

const ThumbNail = ({ video }) => {
  return (
    <div style={{ margin: "4px" }}>
      <video width="168" height="126" controls>
        <source src={video.link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="title">
        <a href={video.link} target="_blank" rel="noopener noreferrer">
          {video.title}
        </a>
      </div>
    </div>
  );
};

export default ThumbNail;
