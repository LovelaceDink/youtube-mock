import React from 'react';

const videoDetail = ({ video }) => {
  if (!video) return <div>Let's look for some videos...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  return (
    <div>
      <div className="ui embed">
        <iframe title={videoTitle} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoTitle}</h4>
        <p>{videoDescription}</p>
      </div>
    </div>
  );
};

export default videoDetail;
