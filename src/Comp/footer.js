import React, { Component } from "react";
// import {Footer} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
class Foots extends Component {
  state = { cont: "hello foosa lovers" };
  render() {
    return (
      <footer>
        <div className="d-flex upper-footer">
          {/* <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul> */}
          <ul>
            <li><i className="fab fa-github"></i> <a href="https://github.com/nattybe/" target="_blank" rel="noopener noreferrer">nattybe</a></li>
            <li>
              <i className="fab fa-telegram-plane"></i> <a href="http://t.me/nattybe" target="_blank"  rel="noopener noreferrer">@nattybe</a>
            </li>
            <li>
            <i className="fas fa-phone"></i>:{" "} <a href="tel:+251978637005">+251 978 63 70 05</a>
            </li>
            <li>
                <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:themanintheomoon@gmail.com">
                themanintheomoon@gmail.com
              </a>
            </li>
          </ul>
          {/* <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul> */}
        </div>
        <div className="bg-light text-center last-footer">Made by NattyBe</div>
      </footer>
    );
  }
}

export default Foots;
