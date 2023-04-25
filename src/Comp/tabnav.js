import { Tab } from "bootstrap";
import React, { Component } from "react";
import {Tabs } from "react-bootstrap";
import Bods from "./bods";
import Skills from "./skills";
class TabNavs extends Component {
  state = {};

  render() {
    return (
        <Tabs
          defaultActiveKey="home"
          className="main-nav"
          id="uncontrolled-tab-example"
          fill
          justify
        >
          <Tab eventKey="home" title="Home"><Bods/></Tab>
          <Tab eventKey="skills" title="Skills"><Skills/></Tab>
          <Tab eventKey="projects" title="Projects"></Tab>
          <Tab eventKey="resume" title="Resume"></Tab>
          <Tab eventKey="for-sale" title="For Sale" disabled></Tab>
          <Tab eventKey="contact" title="Contact"></Tab>
        </Tabs>
    );
  }
}

export default TabNavs;
