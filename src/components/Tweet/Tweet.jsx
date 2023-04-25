import logo from "img/logo.svg";
import card_img from "img/up_part_card.png";
import noAvatar from "img/noAvatar.jpg";
import { useState } from "react";

import {
  Card,
  Logo,
  CardImg,
  DecorateLines,
  Avatar,
  AvatarContainer,
  StyledTextCard,
  StyledButton,
  StyledBtnText,
} from "./Tweet.styled";

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
    <Card>
      <Logo src={logo} alt="logo" />
      <CardImg src={card_img} alt="decorate" />
      <DecorateLines>
        <AvatarContainer>
          <Avatar src={getAvatar()} alt="avatar" />
        </AvatarContainer>
      </DecorateLines>
      <StyledTextCard>{tweets} tweets</StyledTextCard>
      <StyledTextCard>{countFollowers()} Followers</StyledTextCard>
      <StyledButton
        type="button"
        style={{
          backgroundColor: isFollow ? "#5CD3A8" : "#EBD8FF",
        }}
        onClick={toggleFollow}
      >
        <StyledBtnText>{isFollow ? "following" : "follow"}</StyledBtnText>
      </StyledButton>
    </Card>
  );
};
