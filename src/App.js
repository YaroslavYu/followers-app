// import logo from "./logo.svg";
import "./App.css";

import logo from "./img/logo.svg";
import card_img from "./img/up_part_card.png";
import avatar from "./img/avatar_2.png";
import { useEffect, useState } from "react";

import { getUsers } from "./API/API";

function App() {
  const [isFollow, setIsFollow] = useState(() => {
    const cardData = localStorage.getItem("data");
    return cardData ? JSON.parse(cardData).isFollow : false;
  });
  const [totalFollowers, setTotalFollowers] = useState(() => {
    const cardData = localStorage.getItem("data");
    return cardData ? JSON.parse(cardData).totalFollowers : 100500;
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify({ isFollow, totalFollowers }));
    // getUsers();
  }, [isFollow, totalFollowers]);

  const toggleFollow = () => {
    setIsFollow((prevState) => !prevState);
    setTotalFollowers((prevState) =>
      isFollow ? prevState - 1 : prevState + 1
    );
    // const data = {
    //   isFollow,
    //   totalFollowers,
    // };
    // localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" className="logo" />
      <div className="card-contant">
        <img src={card_img} alt="decorate image" className="card_img" />
      </div>
      <div className="card_user-decorate">
        <img src={avatar} alt="avatar" className="avatar" />

        {/* <div className="decorate_user_line"></div> */}
      </div>
      <p className="card_text">777 tweets</p>
      <p className="card_text">
        {totalFollowers.toLocaleString("en-US")} Followers
      </p>
      <button
        type="button"
        className={`follow_button ${isFollow ? "active" : ""}`}
        onClick={toggleFollow}
      >
        <span className="button_text">{isFollow ? "following" : "follow"}</span>
      </button>
    </div>
  );
}

export default App;

// n.toLocaleString();
