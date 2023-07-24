import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { logo } from "../App";
import Contact from "./contact";
class Bods extends Component {
  skills = [
    {name: "Full Stack Web Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      techs: ["MERN", "MEAN", "Vue", "RestAPI", "Firebase"],
    },
    {name: "Front End Web Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Vue",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {name: "Back End Web Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        techs:['Node','Express','Laravel','Spring Boot']
    },
    {name: "Graphics Designing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        techs:['Figma','Canva','Paint3D','Adobe Photoshop']
    },
    {name: "Database Management",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      techs:['MYSQL','Postgres','FireBase','SQLite','MongoDB','Oracle']
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
            <h5 className="ms-2">
              - AI powered Programming and Designs
            </h5>
            <h5 className="ms-3">
              - A fast and user-friendly products
            </h5>
            <h5 className="ms-4">
              - Best performance and security.
            </h5>
          </div>
          <img className="ma-pic" src="ma pics/zion4839ed.jpg" alt="My pic" />
          {/* <img className="ma-pic" src={logo} alt="My pic" /> */}
        </div>
        <div id="skills" className="text-center">
          <h1>Skills</h1>
          <div className="skills-box d-flex">
            {this.skills.map((skill) => {
              return (
                <div
                  className="single-skill"
                  // style={{ backgroundImage: `url("` + skill.img + `")` }}
                >
                  {/* <img src="ma pics/ZION4835.JPG" alt="card" /> */}
                  <div className="skill-name">{skill.name}</div>
                  <div className="tech-badges justify-item-start  ">
                    {skill.techs
                      ? skill.techs.map((tech) => {
                          return <div className="tech-badge">{tech}</div>;
                        })
                      : true}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Contact/>
      </div>
    );
  }
}
export default Bods;
