// import logo from "./logo.svg";
import "./Tweet.css";

import logo from "img/logo.svg";
import card_img from "img/up_part_card.png";
import avatar from "img/avatar-img.png";
import { useEffect, useState } from "react";

// import { getUsers } from "./API/API";

export const Tweet = ({ tweet: { user, avatar, id, followers, tweets } }) => {
  //   const [isFollow, setIsFollow] = useState(() => {
  //     const cardData = localStorage.getItem("data");
  //     return cardData ? JSON.parse(cardData).isFollow : false;
  //   });
  const [isFollow, setIsFollow] = useState(() => {
    const storageFollower = localStorage.getItem("following");
    if (storageFollower) {
      return JSON.parse(storageFollower).includes(user);
    } else return false;
  });

  //   const [totalFollowers, setTotalFollowers] = useState(() => {
  //     const cardData = localStorage.getItem("data");
  //     return cardData ? JSON.parse(cardData).totalFollowers : 100500;
  //   });

  //   useEffect(() => {
  //     localStorage.setItem("data", JSON.stringify({ isFollow, totalFollowers }));
  //     // getUsers();
  //   }, [isFollow, totalFollowers]);

  const toggleFollow = () => {
    const storageFollower = localStorage.getItem("following");
    const followingUsers = storageFollower ? JSON.parse(storageFollower) : [];
    if (!isFollow) {
      const addFollowing = [...followingUsers, user];
      localStorage.setItem("following", JSON.stringify(addFollowing));
      setIsFollow(true);
    } else {
      // const index = followingUsers.indexOf(user)
      const unfollowedArray = followingUsers.filter(
        (followingUser) => followingUser !== user
      );
      localStorage.setItem("following", JSON.stringify(unfollowedArray));
      setIsFollow(false);
    }

    // function countFollowers() {
    //   return isFollow ? followers + 1 : followers;
    // }
    // setIsFollow((prevState) => !prevState);
    // setTotalFollowers((prevState) =>
    //   isFollow ? prevState - 1 : prevState + 1
    //   );
    //   if (!isFollow) {

    //   }
    // const totalFollower = isFollow ? followers + 1 : followers;
  };
  const countFollowers = () => {
    let totalFollowers = Number(followers);
    if (isFollow) totalFollowers += 1;

    return totalFollowers.toLocaleString("en-US");
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" className="logo" />
      <div className="card-contant">
        <img src={card_img} alt="decorate" className="card_img" />
      </div>
      <div className="card_user-decorate">
        <div className="avatar_container">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
        {/* <div className="decorate_user_line"></div> */}
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

// export default App;

// n.toLocaleString();

//  {
//    totalFollower.toLocaleString("en-US");
//  }
