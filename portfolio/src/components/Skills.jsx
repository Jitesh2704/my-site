import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      skill: "HTML",
      meter: "95%",
    },
    {
      skill: "CSS",
      meter: "95%",
    },
    {
      skill: "JavaScript",
      meter: "95%",
    },
    {
      skill: "TypeScript",
      meter: "85%",
    },
    {
      skill: "React.js",
      meter: "95%",
    },
    {
      skill: "Node.js",
      meter: "95%",
    },
    {
      skill: "Express.js",
      meter: "95%",
    },
    {
      skill: "MongoDB",
      meter: "95%",
    },
    {
      skill: "Redux",
      meter: "95%",
    },
    {
      skill: "Restful API Development",
      meter: "90%",
    },
    {
      skill: "TailwindCSS",
      meter: "95%",
    },
    {
      skill: "Material-UI",
      meter: "95%",
    },
    {
      skill: "Bootstrap",
      meter: "95%",
    },
    {
      skill: "Git",
      meter: "95%",
    },
    {
      skill: "GitHub",
      meter: "95%",
    },
    {
      skill: "MongoDB Compass",
      meter: "95%",
    },
    {
      skill: "Docker",
      meter: "90%",
    },
    {
      skill: "Figma",
      meter: "90%",
    },
    {
      skill: "Postman",
      meter: "90%",
    },
    {
      skill: "Socket.io",
      meter: "90%",
    },
    {
      skill: "Microservices Architecture",
      meter: "95%",
    },
    {
      skill: "API Integrations",
      meter: "95%",
    },

    {
      skill: "Software Development",
      meter: "90%",
    },
    {
      skill: "Database Design",
      meter: "90%",
    },
    {
      skill: "Responsive Web Design",
      meter: "90%",
    },
    {
      skill: "Scheduling and Messaging Queues",
      meter: "90%",
    },
    {
      skill: "Keycloak Authentication",
      meter: "90%",
    },
    {
      skill: "TensorFlow",
      meter: "85%",
    },
    {
      skill: "C++",
      meter: "90%",
    },
    {
      skill: "C",
      meter: "85%",
    },
    {
      skill: "Python",
      meter: "85%",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A skilled full-stack web developer specializing in front-end and
                back-end technologies.
                <br></br> Experienced in building real-time applications,
                microservices, and seamless API integrations.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img
                      src={
                        skill.meter === "95%"
                          ? meter1
                          : skill.meter === "90%"
                          ? meter3
                          : meter2
                      }
                      alt="Image"
                    />
                    <h5>{skill.skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
