// import logo from "./logo.svg";
// import "./App.css";

// import logo from "./img/logo.svg";
// import card_img from "./img/up_part_card.png";
// import avatar from "./img/avatar-img.png";
// import { useEffect, useState } from "react";

// import { getUsers } from "./API/API";

import { Route, Routes, Navigate } from "react-router-dom";

import { Tweets } from "components/Tweets/Tweets";
import { Home } from "components/Home/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        {/* </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Tweets /> */}
    </div>
  );
};

// export default App;

// n.toLocaleString();
