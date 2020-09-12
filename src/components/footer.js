import React from "react";

import YoutubeLogo from '../img/yt-logo.png';
import TwitterLogo from '../img/twitter-logo.png';
import InstagramLogo from '../img/instagram-logo.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>Leica 2020</h1>
        <ul>
          <li>
            <a href="youtube.com">
              <img src={YoutubeLogo} alt="Leica M6" />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img src={TwitterLogo} alt="Leica M6" />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src={InstagramLogo} alt="Leica M6" />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
