import React from "react";
import "./App.css";

function Music(props) {
  const username = props.tracks[0].user_name;
  const user_link = props.tracks[0].user_href;

  return (
    <div>
      <h1>Music</h1>
      <div className="music-container">
        <a
          className="username"
          rel="noreferrer"
          href={user_link}
          title={username}
          target="_blank"
        >
          {username}
        </a>{" "}
        ·{" "}
        {props.tracks.map((track) => (
          <div className="music-item">
            <div className="track">
              <a
                rel="noreferrer"
                href={track.song_href}
                title={track.song_name}
                target="_blank"
              >
                {track.song_name}
              </a>
            </div>
            <iframe
              title="soundcloud"
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              src={track.link}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
