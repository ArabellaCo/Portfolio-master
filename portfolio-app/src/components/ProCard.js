// export const ProCard = () =>{
//     return (
//     <div>  
//             <section className="projects" id="projects">
//       <Container>
//         <Row> 
//           <Col size={12}>
//             <TrackVisibility>
//               {({ Visible }) => (
//                 <div
//                   className={Visible ? "animate__animated animate__fadeIn" : ""}
//                 >
//                   <h2>My Projects</h2>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>

//     </div>

        
//     )
// }



// // import { Col } from "react-bootstrap";
// // import {
// //     Tab,
// //     Nav,
// //     TabContainer,
// //     TabContent,
// //   } from "react-bootstrap";
     

// // export const ProjectCard = ({ title, description, imgUrl, href }) => {
// //     return (
// //     <div>  
// //         <Col size={12} sm={6} md={4}>
// //             <div className="proj-image">
// //                 <img className="img-project" src={imgUrl} alt="project for card"/>
// //                 <div className="proj-text">
// //                     <h4>{title}</h4>
// //                     <span>{description}</span>
// //                     <a href='https://bellasia.github.io/MiniProjectA/index.html' >
// //                        <button>Yey!</button>
// //                     </a>
// //                     <div
// //                 >                 
// //                   <TabContainer id="projects-tabs" defaultActiveKey="first">
// //                     <Nav
// //                       variant="pills"
// //                       className="nav-pills mb-5 justify-content-center align-items-center"
// //                       id="pills-tab"
// //                     ></Nav>
// //                     <TabContent
// //                       id="slideInUp"
// //                     >
// //                       <Tab.Pane eventKey="first">
// //                       </Tab.Pane>
// //                     </TabContent>
// //                   </TabContainer>

                  

// //                 </div>

// //                 </div>
// //             </div>
// //         </Col>


// //         <Col size={12} sm={6} md={4}>
// //             <div className="proj-image">
// //                 <img className="img-project" src={imgUrl} alt="project for card"/>
// //                 <div className="proj-text">
// //                     <h4>{title}</h4>
// //                     <span>{description}</span>
// //                     <a href='https://bellasia.github.io/MiniProjectA/index.html' >
// //                        <button>noo!</button>
// //                     </a>
// //                     <div
// //                 >                 
// //                   <TabContainer id="projects-tabs" defaultActiveKey="second">
// //                     <Nav
// //                       variant="pills"
// //                       className="nav-pills mb-5 justify-content-center align-items-center"
// //                       id="pills-tab"
// //                     ></Nav>
// //                     <TabContent
// //                       id="slideInUp"
// //                     >
// //                       <Tab.Pane eventKey="second">
// //                       </Tab.Pane>
// //                     </TabContent>
// //                   </TabContainer>

                  

// //                 </div>

// //                 </div>
// //             </div>
// //         </Col>

// //     </div>

        
// //     )
// // }




// //  <section className="projects" id="projects">
// //       <Container>
// //         <Row>
// //           <Col size={12}>
// //             <TrackVisibility>
// //               {({ Visible }) => (
// //                 <div
// //                   className={Visible ? "animate__animated animate__fadeIn" : ""}
// //                 >
// //                   <h2>My Projects</h2>
// //                   <p>
// //                     Lorem Ipsum is simply dummy text of the printing and
// //                     typesetting industry. Lorem Ipsum has been the industry's
// //                     standard dummy text ever since the 1500s, when an unknown
// //                     printer took a galley of type and scrambled it to make a
// //                     type specimen book.
// //                   </p>
// //                   <TabContainer id="projects-tabs" defaultActiveKey="first">
// //                     <Nav
// //                       variant="pills"
// //                       className="nav-pills mb-5 justify-content-center align-items-center"
// //                       id="pills-tab"
// //                     ></Nav>
// //                     <TabContent
// //                       id="slideInUp"
// //                       className={
// //                         Visible ? "animate__animated animate__slideInUp" : ""
// //                       }
// //                     >
// //                       <Tab.Pane eventKey="first">
// //                         <Row>
// //                           {projects.map((project, index) => {
// //                             return <ProjectCard key={index} {...project} />;
// //                           })}
// //                         </Row>
// //                       </Tab.Pane>
// //                     </TabContent>
// //                   </TabContainer>
// //                 </div>
// //               )}
// //             </TrackVisibility>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>




// import {
//     Container,
//     Row,
//     Col,
//     Tab,
//     Nav,
//     TabContainer,
//     TabContent,
//   } from "react-bootstrap";
//   // import { ProjectCard } from "./ProjectCard";
//   import book from "../assets/img/book.png";
//   import calculator from "../assets/img/calculator.svg";
//   import websiteCity from "../assets/img/website.svg";
//   import flowers from "../assets/img/flower.png";
//   import games from "../assets/img/games.svg";
//   import team from "../assets/img/team.png";
  
//   import "animate.css";
//   import TrackVisibility from "react-on-screen";
  
//   export const Projects = () => {
//     const projects = [
//       {
//         title: "Calculator",
//         description: "Input the value you want",
//         imgUrl: calculator,
//       },
  
//       {
//         title: "Unity",
//         description: "Teamwork begins by building trust",
//         imgUrl: team,
//       },
//       {
//         title: "Baguio",
//         description: "The Summer Capital of the Philippines ",
//         imgUrl: websiteCity,
//         href: "https://bellasia.github.io/MiniProjectA/index.html"
//       },
//       {
//         title: "Flowers",
//         description: "It's a beautiful sight to behold.",
//         imgUrl: flowers,
//       },
//       {
//         title: "Games",
//         description: "Real life is a game of strategy",
//         imgUrl: games,
//       },
//       {
//         title: "Library",
//         description: "A place to escape reality.",
//         imgUrl: book,
//       },
  
//     ];
  
//     return (
//       <div>  
//               <section className="projects" id="projects">
//         <Container>
//           <Row> 
//             <Col size={12}>
//               <TrackVisibility>
//                 {({ Visible }) => (
//                   <div
//                     className={Visible ? "animate__animated animate__fadeIn" : ""}
//                   >
//                     <h2>My Projects</h2>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry. Lorem Ipsum has been the industry's
//                       standard dummy text ever since the 1500s, when an unknown
//                       printer took a galley of type and scrambled it to make a
//                       type specimen book.
//                     </p>
//                   </div>
//                 )}
//   {/* Flowers */}
//     <div className="box">
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={flowers} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Flowers</h4>
//                       <span>"It's a beautiful sight to behold."</span>
//                       <a href="https://bellasia.github.io/MiniProjectA/index.html" >
//                          <button>flowers!</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
  
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
  
  
//   {/* Games */}
//           <div>
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={games} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Games</h4>
//                       <span>Real life is a game of strategy</span>
//                       <a href='https://bellasia.github.io/Rock-Paper-Scissors/' >
//                          <button>Yey!</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
  
  
//   {/* Converter */}
//           <div>
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={calculator} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Converter</h4>
//                       <span>Input the value you want</span>
//                       <a href='https://bellasia.github.io/temperature/' >
//                          <button>babaguhin ang image!</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
  
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
  
  
//   {/* Calculator */}
//   <div>
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={calculator} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Calculator</h4>
//                       <span>Input the value you want</span>
//                       <a href='https://bellasia.github.io/javaObject/' >
//                          <button>Calculator</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
  
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
  
  
//   {/* Christmas tree */}
//   <div>
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={calculator} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Christmas Tree</h4>
//                       <span>Merry Merry xmas</span>
//                       <a href='https://bellasia.github.io/chirstmastree/' >
//                          <button>Christmas tree baguhin ang img</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
  
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
//   {/* group project */}
//   <div>
//           <Col size={12} sm={6} md={4}>
//               <div className="proj-image">
//                   <img className="img-project" src={calculator} alt="project for card"/>
//                   <div className="proj-text">
//                       <h4>Unity</h4>
//                       <span>Teamwork begins by building trust</span>
//                       <a href='https://vernaloqui.github.io/Farmer-sHubReact/' >
//                          <button>Unity</button>
//                       </a>
//                       <div
//                   >                 
//                     <TabContainer id="projects-tabs" defaultActiveKey="first">
//                       <Nav
//                         variant="pills"
//                         className="nav-pills mb-5 justify-content-center align-items-center"
//                         id="pills-tab"
//                       ></Nav>
//                       <TabContent
//                         id="slideInUp"
//                       >
//                         <Tab.Pane eventKey="first">
//                         </Tab.Pane>
//                       </TabContent>
//                     </TabContainer>
  
//                </div>
//                   </div>
//               </div>
//           </Col>
//           </div>
  
  
  
//               </TrackVisibility>
//             </Col>
//           </Row>
//         </Container>
//       </section>
  
//       </div>
//     );
//   };
  