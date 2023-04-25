import "./Tweet.css";

import logo from "img/logo.svg";
import card_img from "img/up_part_card.png";
import noAvatar from "img/noAvatar.jpg";
import { useState } from "react";

export const Tweet = ({ tweet: { user, avatar, followers, tweets } }) => {
  const [isFollow, setIsFollow] = useState(() => {
    const storageFollower = localStorage.getItem("following");
    if (storageFollower) {
      return JSON.parse(storageFollower).includes(user);
    } else return false;
  });

  const toggleFollow = () => {
    const storageFollower = localStorage.getItem("following");
    const followingUsers = storageFollower ? JSON.parse(storageFollower) : [];
    if (!isFollow) {
      const addFollowing = [...followingUsers, user];
      localStorage.setItem("following", JSON.stringify(addFollowing));
      setIsFollow(true);
    } else {
      const unfollowedArray = followingUsers.filter(
        (followingUser) => followingUser !== user
      );
      localStorage.setItem("following", JSON.stringify(unfollowedArray));
      setIsFollow(false);
    }
  };

  const countFollowers = () => {
    let totalFollowers = Number(followers);
    if (isFollow) totalFollowers += 1;

    return totalFollowers.toLocaleString("en-US");
  };

  const getAvatar = () => {
    return avatar ? avatar : noAvatar;
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" className="logo" />
      <img src={card_img} alt="decorate" className="card_img" />
      <div className="card_user-decorate">
        <div className="avatar_container">
          <img src={getAvatar()} alt="avatar" className="avatar" />
        </div>
      </div>
      <p className="card_text">{tweets} tweets</p>
      <p className="card_text">{countFollowers()} Followers</p>
      <button
        type="button"
        className={`follow_button ${isFollow ? "active" : ""}`}
        onClick={toggleFollow}
      >
        <span className="button_text">{isFollow ? "following" : "follow"}</span>
      </button>
    </div>
  );
};
