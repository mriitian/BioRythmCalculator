import React, { useState } from "react";
import UsersLine from "../components/UsersLine";
import BiorythmWave from "../components/BiorythmWave";
import BiorythmPie from "../components/BiorythmPie";
import MyBio from "../components/MyBio";

export default function MyBiorythm({ setCurr, currUser }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="mybiorythm">
      <UsersLine setCurrent={setCurr} />
      <BiorythmWave currentUser={currUser} />
      <BiorythmPie currentUser={currUser} />
      <MyBio />
    </div>
  );
}
