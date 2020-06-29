import React from 'react';
import './profile-component-styles.scss';
import Emoji from '../emojis/emojis-component';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src="./img/furla_logo.jpg" alt="avatar-nav" />
      </div>
      <aside className="profile-aside">
        <div className="profile-aside-buttons">
          <h2>furla</h2>
          <button type="button">Follow</button>
        </div>
        <div className="profile-aside-stats">
          <ul>
            <li>674<span>posts</span></li>
            <li>1.9m<span>followers</span></li>
            <li>58<span>following</span></li>
          </ul>
        </div>
        <div className="profile-aside-description">
          <h3>FURLA </h3>
          <li>
            <Emoji symbol="👜" label="bag" />
            Design&Mode <Emoji symbol="👜" label="bag" />
          </li>
          <li>
            <Emoji symbol=" 🎥" label="bag" />
            Since 1927 Italy / Videos
          </li>
          <li>
            <Emoji symbol="📧" label="contact" />
            contact - furla@gmail.com
          </li>
          <li>
            <Emoji symbol="⬇" label="arrow-down" /> Submit your videos below <Emoji symbol="⬇" label="arrow-down" />
          </li>
          <li>
            <a href="https://https://www.youtube.com/watch?v=NHN8qBXe1FM/" rel="noopener noreferrer" target="_blank">furlavideos.com</a>{' '}
          </li>
        </div>
        <div className="profile-aside-followed">Followed by furla</div>
      </aside>
    </div>
  );
};

export default Profile;
