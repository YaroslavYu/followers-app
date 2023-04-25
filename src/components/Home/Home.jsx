import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Welcome!!!
      <Link to="/tweets">tweets</Link>
    </div>
  );
};
