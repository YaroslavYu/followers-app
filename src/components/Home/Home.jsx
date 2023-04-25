import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="page_welcome">
      Welcome. Here you can see the <Link to="/tweets">tweets</Link> of others
      and follow or unfollow if you want.
    </div>
  );
};
