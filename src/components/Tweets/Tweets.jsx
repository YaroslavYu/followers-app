import { Tweet } from "components/Tweet/Tweet";

import { getUsers } from "API/API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Tweets.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const dropdownOptions = ["show all", "follow", "followings"];

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(1);
  const [tweetsOnPage, setTweetsOnPage] = useState([]);
  // const [filteredTweets, setFilteredTweets] = useState([]);
  const [filter, setFilter] = useState("show all");

  const navigate = useNavigate();

  useEffect(() => {
    if (!tweets.length) {
      const setData = async () => {
        try {
          const fetchedTweets = await getUsers();

          //   console.log(fetchedTweets);
          setTweets(fetchedTweets);
          //   setTotalPages(fetchedTweets.length / 3);

          const endSliceTweets =
            fetchedTweets.length < page * 3 ? tweets.length : page * 3;
          const viewedTweets = fetchedTweets.slice(0, endSliceTweets);
          setTweetsOnPage(viewedTweets);
          //   setFilteredTweets(viewedTweets);
        } catch (error) {
          window.alert(error.message);
        }
      };
      setData();
    } else {
      const endSliceTweets =
        tweets.length < page * 3 ? tweets.length : page * 3;
      setTweetsOnPage(tweets.slice(0, endSliceTweets));
    }
  }, [page]);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleChangeDropdown = ({ value }) => {
    setFilter(value);
  };

  const filteredTweets = () => {
    const storageFollower = localStorage.getItem("following");
    const followingUsers = storageFollower ? JSON.parse(storageFollower) : [];
    switch (filter) {
      case "followings":
        return tweetsOnPage.filter(
          (tweet) => followingUsers.indexOf(tweet.user) !== -1
        );
      case "follow":
        return tweetsOnPage.filter(
          (tweet) => followingUsers.indexOf(tweet.user) === -1
        );

      default:
        return tweetsOnPage;
    }
  };

  const isLastPage = page < tweets.length / 3;

  return (
    <>
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <Dropdown
        options={dropdownOptions}
        onChange={handleChangeDropdown}
        value={dropdownOptions[0]}
        placeholder="Select an option"
      />
      ;
      <ul className="list">
        {filteredTweets().map((tweet) => {
          return (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
      </ul>
      {isLastPage && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};
