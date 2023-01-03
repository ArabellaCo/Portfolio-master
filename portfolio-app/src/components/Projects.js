import {
  Container,
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import converter from "../assets/img/converter.png";
import calculator from "../assets/img/calculator.svg";
import tree from "../assets/img/tree.png";
import flowers from "../assets/img/flower.png";
import games from "../assets/img/games.svg";
import team from "../assets/img/team.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  return (
    <div>
      <section className="projects" id="projects">
        <Container>
          <Col size={12}>
            <Row>
              <TrackVisibility>
                <h2>My Projects</h2>
                <p>
                These are the projects and homework that we did on Kodego. 
                </p>
                
                  {/* Flowers */}
                
                  <div>
                    <Row size={12} sm={6} md={4}>
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={flowers}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Flowers</h4>
                          <span>"It's a beautiful sight to behold."</span>
                          <a href="https://bellasia.github.io/MiniProjectA/index.html">
                            <button>flowers!</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>
                    

                  {/* Games */}
                  
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={games}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Games</h4>
                          <span>Real life is a game of strategy</span>
                          <a href="https://bellasia.github.io/Rock-Paper-Scissors/">
                            <button>Yey!</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>
              

                  {/* Converter */}
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={converter}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Converter</h4>
                          <span>Input the value you want</span>
                          <a href="https://bellasia.github.io/temperature/">
                            <button>Converter</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>

                  {/* Calculator */}
                   
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={calculator}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Calculator</h4>
                          <span>Input the value you want</span>
                          <a href="https://bellasia.github.io/javaObject/">
                            <button>Calculator</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>

                  {/* Christmas tree */}
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={tree}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Christmas Tree</h4>
                          <span>Merry Merry xmas</span>
                          <a href="https://bellasia.github.io/chirstmastree/">
                            <button>Christmas tree</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>

                  {/* group project */}
                      <div className="proj-image">
                        <img
                          className="img-project"
                          src={team}
                          alt="project for card"
                        />
                        <div className="proj-text">
                          <h4>Unity</h4>
                          <span>Teamwork begins by building trust</span>
                          <a href="https://vernaloqui.github.io/Farmer-sHubReact/">
                            <button>Unity</button>
                          </a>
                          <div>
                            <TabContainer id="projects-tabs">
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                              ></Nav>
                              <TabContent id="slideInUp"></TabContent>
                            </TabContainer>
                          </div>
                        </div>
                      </div>
                  </Row>
                  </div>
                
                
              </TrackVisibility>
            </Row>
          </Col>
        </Container>
      </section>
    </div>
  );
};
