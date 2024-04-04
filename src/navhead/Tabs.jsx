import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Tabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home" className="tabheads">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile" className="tabheads">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab" className="tabheads">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  );
}
