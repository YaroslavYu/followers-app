import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { List, StyledButton, StyledDropdown } from './Tweets.styled';

import { Tweet } from 'components/Tweet/Tweet';
import { getUsers } from 'API/API';

const dropdownOptions = [
  {
    value: 'show all',
    label: 'Show all tweets',
  },
  {
    value: 'follow',
    label: 'Unfollowing tweets',
  },
  {
    value: 'followings',
    label: 'Followings tweets',
  },
];

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [tweetsOnPage, setTweetsOnPage] = useState([]);
  const [filter, setFilter] = useState('show all');
  const navigate = useNavigate();

  useEffect(() => {
    if (!tweets.length) {
      const setData = async () => {
        try {
          const fetchedTweets = await getUsers();
          setTweets(fetchedTweets);

          const endSliceTweets =
            fetchedTweets.length < page * 3 ? tweets.length : page * 3;
          const viewedTweets = fetchedTweets.slice(0, endSliceTweets);
          setTweetsOnPage(viewedTweets);
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
  }, [page, tweets]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleChangeDropdown = ({ value }) => {
    setFilter(value);
  };

  const filteredTweets = () => {
    const storageFollower = localStorage.getItem('following');
    const followingUsers = storageFollower ? JSON.parse(storageFollower) : [];
    switch (filter) {
      case 'followings':
        return tweetsOnPage.filter(
          tweet => followingUsers.indexOf(tweet.user) !== -1
        );
      case 'follow':
        return tweetsOnPage.filter(
          tweet => followingUsers.indexOf(tweet.user) === -1
        );
      default:
        return tweetsOnPage;
    }
  };

  const isShowBtnLoadMore = page < tweets.length / 3 && filter === 'show all';
  const noFilteredItems = filteredTweets().length === 0 && tweets.length !== 0;

  return (
    <>
      <StyledButton type="button" onClick={() => navigate('/')}>
        Back
      </StyledButton>
      <StyledDropdown
        options={dropdownOptions}
        onChange={handleChangeDropdown}
        value={dropdownOptions[0]}
      />

      <List>
        {filteredTweets().map(tweet => {
          return (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
        {noFilteredItems && <div>No data for your filter</div>}
      </List>
      {isShowBtnLoadMore && (
        <StyledButton type="button" onClick={loadMore}>
          Load more
        </StyledButton>
      )}
    </>
  );
};
