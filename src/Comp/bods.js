import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../App";
class Bods extends Component {
  skills = [
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "Angular",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      img: logo,
      name: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  render() {
    return (
      <div>
        <div className="d-flex mb-5 for-pic justify-space-between" id="home">
          <div className="welcome">
            {/* <h1>Hello my name is Natty</h1> */}
            <h2>
              I don't always create websites, but when I do, they're pretty
              awesome.
            </h2>
          </div>
          <img className="ma-pic" src="ma pics/zion4839ed.jpg" alt="My pic" />
          {/* <img className="ma-pic" src={logo} alt="My pic" /> */}
        </div>
        <div id="skills" className=" text-center">
          <h1>Skills</h1>
          <div className="skills-box d-flex">
            {this.skills.map((skill) => {
              return (
                <div
                  className="single-skill"
                  style={{ backgroundImage: `url("` + skill.img + `")` }}
                >
                  {/* <img src="ma pics/ZION4835.JPG" alt="card" /> */}
                  <div className="description">{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex mb-5 for-pic justify-space-between" id="home">
          <div className="welcome">
            {/* <h1>Hello my name is Natty</h1> */}
            <h2>
              I don't always create websites, but when I do, they're pretty
              awesome.
            </h2>
          </div>
          {/* <img className="ma-pic" src="ma pics/zion4839ed.jpg" alt="My pic" /> */}
          <img className="ma-pic" src={logo} alt="My pic" />
        </div>
        <div className="d-flex mb-5 for-pic justify-space-between" id="home">
          <div className="welcome">
            {/* <h1>Hello my name is Natty</h1> */}
            <h2>
              I don't always create websites, but when I do, they're pretty
              awesome.
            </h2>
          </div>
          {/* <img className="ma-pic" src="ma pics/zion4839ed.jpg" alt="My pic" /> */}
          <img className="ma-pic" src={logo} alt="My pic" />
        </div>
        <div className="d-flex mb-5 for-pic justify-space-between" id="home">
          <div className="welcome">
            {/* <h1>Hello my name is Natty</h1> */}
            <h2>
              I don't always create websites, but when I do, they're pretty
              awesome.
            </h2>
          </div>
          {/* <img className="ma-pic" src="ma pics/zion4839ed.jpg" alt="My pic" /> */}
          <img className="ma-pic" src={logo} alt="My pic" />
        </div>
      </div>
    );
  }
}
export default Bods;
