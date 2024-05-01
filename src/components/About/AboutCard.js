import React from "react"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sai Krishna </span>
            from <span className="purple"> Adoni, India.</span>
            <br /> I am a second year student pursuing BTech CSE at SRMIST, KTR.
            <br />
            I am interested in Oracle Cloud Computing And Problem Solving.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
