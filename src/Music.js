import React from "react";
import "./App.css";

function Music(props) {
  return (
    <div>
      <h1>Music</h1>
      <iframe
        title="soundcloud"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        // allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1379633665&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div>
        <a
          rel="noreferrer"
          href="https://soundcloud.com/user-643892567"
          title="Travis_Uptown4o2"
          target="_blank"
        >
          Travis_Uptown4o2
        </a>{" "}
        ·{" "}
        <a
          rel="noreferrer"
          href="https://soundcloud.com/user-643892567/radio-fuzz"
          title="Radio Fuzz"
          target="_blank"
        >
          Radio Fuzz
        </a>
      </div>
    </div>
  );
}

export default Music;
