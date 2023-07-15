import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TabNavs from "./tabnav.js";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Navs from "./nav.js";
import Bods from "./bods.js";
import Foots from "./footer.js";
function Main(params) {
  return (
    // <div className="shadow shadow-1 m-0">
    // <TabNavs/>
    // <LeftTabsExample />
    // </div>
    <div className="">
    <Navs/>
    <Bods/>
    <Foots />
    </div>
  );
}
export default Main;
