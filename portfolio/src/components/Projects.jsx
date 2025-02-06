import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chatfusion from "../assets/img/chatfusion.png";
import imdb from "../assets/img/imdb.png";
import games from "../assets/img/games.png";
import disney from "../assets/img/disney.png";
import postsphere from "../assets/img/postsphere.png";
import piano from "../assets/img/piano.png";
import power from "../assets/img/power.jpg";
import autism from "../assets/img/autism.png";
import heart from "../assets/img/heart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chat Fusion App",
      description: "Connect, Chat & Collaborate",
      imgUrl: chatfusion,
      link: "https://chat-fusion-app.netlify.app/",
    },
    {
      title: "Post 'O' Sphere",
      description: "Content Creation Redefined: Publish, Engage, and Share",
      imgUrl: postsphere,
      link: "https://postsphere.netlify.app/",
    },
    {
      title: "Disney+ Platfrom",
      description: "A Perfect Clone Site",
      imgUrl: disney,
      link: "https://disney-plus-clone-eight-delta.vercel.app/",
    },
    {
      title: "GameHub",
      description: "Discover Trending Games",
      imgUrl: games,
      link: "https://top-games-page.vercel.app/",
    },
    {
      title: "CineTrack",
      description: "Your Ultimate Movie and Show Guide",
      imgUrl: imdb,
      link: "https://jitesh2704.github.io/movies-info-page-deploy/",
    },
    {
      title: "Digital Piano",
      description: "Play Anywhere, Anytime",
      imgUrl: piano,
      link: "https://github.com/Jitesh2704/Playable-Piano",
    },
  ];

  const mlProjects = [
    {
      title: "Heart Disease Prediction",
      description: "Predicting Heart Disease with Precision",
      imgUrl: heart,
      link: "https://github.com/Jitesh2704/heart-disease-prediction",
    },
    {
      title: "Autism Early Prediction",
      description: "Harnessing the Power of fMRI Imaging",
      imgUrl: autism,
      link: "https://github.com/Jitesh2704/autism-prediction",
    },
    {
      title: "Power Price Prediction",
      description: "Predicting Tomorrow’s Energy Costs",
      imgUrl: power,
      link: "https://github.com/Jitesh2704/Electricity-price-prediction",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p style={{ width: "75%" }}>
                    I have developed a variety of projects that focus on
                    real-time communication, interactive user experiences, and
                    data-driven insights. These projects highlight my expertise
                    in full-stack development, API integrations, and machine
                    learning for predictive analytics. My work spans across
                    building dynamic platforms with advanced functionalities and
                    creating models for real-world problem-solving. I have also
                    honed skills in UI/UX design, ensuring seamless user
                    experiences across different platforms.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Developement</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ML & Data Science</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Professional Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {mlProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p style={{ width: "72%" }}>
                          Throughout my career, I have gained extensive
                          experience working on a diverse range of professional
                          projects. I have contributed to the development of
                          Learning Management SaaS platforms, E-commerce
                          solutions, and Community Spaces, focusing on seamless
                          user interactions and robust backend architectures.
                          Additionally, I have worked on building User
                          Management Systems, Activity Tracking Dashboards, and
                          implementing secure Authorization and Authentication
                          protocols.<br></br> <br></br>My expertise also extends
                          to Profile Building features, Real-time Streaming and
                          Compression Mechanisms, and Database Design. I have
                          integrated third-party services, handled encryption
                          and decryption processes, and optimized job scheduling
                          workflows. Throughout my journey, I have prioritized
                          creating efficient, scalable solutions while ensuring
                          thorough code documentation and maintaining security
                          best practices.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
