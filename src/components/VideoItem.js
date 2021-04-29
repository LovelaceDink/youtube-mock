import React from 'react';
import './VideoItem.css';

const videoItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={videoTitle} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{videoTitle}</div>
      </div>
    </div>
  );
};

export default videoItem;
