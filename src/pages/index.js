import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { motion } from "framer-motion"
import { Col, Row } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <Row>
        <Col md={3}>
          <motion.div
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}
            className="main-picture"
          >
            <div className="img">
              <Image imgStyle={{ borderRadius: "20px" }} />
            </div>
          </motion.div>
        </Col>
        <Col md={9}>
          <div className="mt-5">
            <h1>
              <span style={{ fontWeight: "bold" }}>Hi there!</span> I'm Ariel
            </h1>
            <h5>React/Gatsby Developer based from Cebu, Philippines.</h5>
            <p>
              My goal is to deliver websites that are optimized, SEO-Oriented
              pages, desktop/mobile responsive, and custom based on client's
              request.
            </p>

            <p>
              On a normal weekdays, I work as a full-time independent contractor
              via upwork focusing on creating web application websites that uses
              the latest technologies such as ReactJS, GatsbyJS, Apollo GraphQL
              integration for both apollo server and client. <br /> <br />I also
              make sure to have a spare time for reading, learning new
              technologies, reading world economy updates, analyzing and
              creating stock market charts, and taking online courses.
            </p>
          </div>{" "}
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
