import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from "react-bootstrap/NavbarBrand"
import Nav from "react-bootstrap/Nav"
import './App.css';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Particles from "react-particles-js";
import Background from "./assets/images/background.jpg";

class App extends Component {

  constructor() {
    super();
    this.state={
      title: "Thomas Pellegrini",
      headerLinks: [
        {title: "Home", path: '/'},
        {title: "About", path: '/about'},
        {title: "Contact", path: '/contact'}
      ],
      home: {
        title: 'Random things to write',
        subTitle: "Personal projects",
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    console.log(new Date(2020, 8, 28))
    return(

        <Router>
          <Particles
              params={{
                particles: {number: { value: 20, density: { enable: true, value_area: 800 } },
                  color: { value: "#000000" },
                  shape: {
                    type: "circle",
                    stroke: { width: 0,  color: "#000000"},
                    polygon: { nb_sides: 5 },
                    image: { src: "img/github.svg", width: 100, height: 100 }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#000000",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1  ,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                  },
                  modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                  }
                },
                retina_detect: true
              }}
              style={{
                width: '100%',
                  position: "absolute",


              }}
          />
          <Container className="" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Thomas Pellegrini</Navbar.Brand>
              <Navbar.Toggle className={"border-0"} aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>


                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path={"/"} exact render={() =>
                <HomePage
                    title={this.state.home.title}
                    subTitle={this.state.home.subTitle}
                    text={this.state.home.text}
                />}
            />

            <Route path={"/about"} render={() =>
                <AboutPage
                    title={this.state.about.title}
                />}
            />

            <Route path={"/contact"} render={() =>
                <ContactPage
                    title={this.state.contact.title}
                />}
            />

            <Footer />


          </Container>

        </Router>
    );
  }


}

export default App;
