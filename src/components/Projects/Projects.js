import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Weather App"
              //description="This is a Voice Assistant Project completely made in Python Programming Language. It uses MySQL for data storage and multiple python libraries and APIs to interpret user command and answers accordingly."
              ghLink="https://github.com/krishnasai2005/WeatherAppGUI-Java"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="SRM Hackathon"
              //description="This project is made completely in Python Programming Language. The UI is made using TkInter Python Library and MySQL is used for Data Managament and Storage"
              //ghLink="https://github.com/nabhpatodi10/Hostel_Management_System"
              demoLink="https://drive.google.com/file/d/19s-q2aDdiJa3lqCV6xjhnM9mo0GXPuEN/view?usp=sharing"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Login Page"
              //description="This is a News Type Classification project that uses Random Forest to predict the type of news based on the News Headline and a Small Description of the News (optional)."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Password Generator"
              //description="This ATM Simulator project is a Java-based application that simulates the functionalities of an Automated Teller Machine (ATM). It is designed using Java Swing for the graphical user interface and connects to a MySQL database to manage user accounts and transactions."
              //ghLink="https://github.com/nabhpatodi10/ATM-Simulator"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Billing System"
              description="The Billing System project is a Java-based application developed using Java Swing for the graphical user interface, JCalendar for date selection, and MySQL for database management. This application offers a comprehensive suite of features for managing billing-related tasks, including customer management, inventory control, order processing, and payment tracking."
              ghLink="https://github.com/nabhpatodi10/Billing-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
