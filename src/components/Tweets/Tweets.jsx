import { Tweet } from "components/Tweet/Tweet";

import { getUsers } from "API/API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Tweets.css";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [tweetsOnPage, setTweetsOnPage] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!tweets.length) {
      const setData = async () => {
        try {
          const fetchedTweets = await getUsers();

          //   console.log(fetchedTweets);
          setTweets(fetchedTweets);
          setTotalPages(fetchedTweets.length / 3);

          const endSliceTweets =
            fetchedTweets.length < page * 3 ? tweets.length : page * 3;
          setTweetsOnPage(fetchedTweets.slice(0, endSliceTweets));
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

  //   const goBack = () => {
  //     navigate("/");
  //   };

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
      <ul className="list">
        {tweetsOnPage.map((tweet) => {
          // console.log(tweet);
          return (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
        {/* <li>
        <Tweet />
      </li> */}
      </ul>
      {page < totalPages && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};
