import { Route, Routes, Navigate } from "react-router-dom";

import { Tweets } from "components/Tweets/Tweets";
import { Home } from "components/Home/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
