import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UsersLine from "../components/UsersLine";
import MyBiorythm from "../tabs/MyBiorythm";
import DailyInt from "../tabs/DailyInt";
import Theory from "../tabs/Theory";

export default function Tabhead() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      transition={true}
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="My Biorythm">
        <MyBiorythm setCurr={setCurrentUser} currUser={currentUser} />
      </Tab>
      <Tab eventKey="profile" title="Daily Interpretation">
        <DailyInt currentUser={currentUser} />
      </Tab>
      <Tab eventKey="longer-tab" title="Theory of Biorythm">
        <Theory />
      </Tab>
    </Tabs>
  );
}
