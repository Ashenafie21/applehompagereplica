
import React, { useState, useEffect } from "react";

const apiLink =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCF3kAloQ34USZfYmHCxLlBsIEBuLDeYn8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => {
        const fetchedVideos = data.items || [];
        setVideos(fetchedVideos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getThumbnailUrl = (video) =>
    video?.snippet?.thumbnails?.high?.url || "";
  const getTitle = (video) => video?.snippet?.title || "No Title";
  const getDescription = (video) =>
    video?.snippet?.description || "No Description";
  const getPublishingDate = (video) => {
    const rawDate = video?.snippet?.publishedAt;
    if (rawDate) {
      const date = new Date(rawDate);
      return date.toDateString();
    }
    return "No Date";
  };

  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <br />
                Latest Videos
              </div>
              <br />
            </div>
            {videos.map((video) => {
              const videoId = video.id.videoId;
              const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

              return (
                <div key={videoId} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={getThumbnailUrl(video)}
                          alt="Video Thumbnail"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getTitle(video)}
                        </a>
                      </div>
                      <div className="videoPublishingDate">
                        {getPublishingDate(video)}
                      </div>
                      <div className="videoDesc">{getDescription(video)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;
