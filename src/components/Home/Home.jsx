import { Link } from 'react-router-dom';
import { StyledHomePage } from './Home.styled';

export const Home = () => {
  return (
    <StyledHomePage className="page_welcome">
      Welcome. Here you can see the <Link to="/tweets">tweets</Link> of others
      and follow or unfollow if you want.
    </StyledHomePage>
  );
};
