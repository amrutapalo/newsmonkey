import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {
  Link
} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container style={this.props.style}>
          <Navbar.Brand to="#home">NewsMonkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/general">Home</Link></Nav.Link>
              <Nav.Link><Link to="/business">Business</Link></Nav.Link>
              <Nav.Link><Link to="/entertainment">Entertainment</Link></Nav.Link>
              <Nav.Link><Link to="/health">Health</Link></Nav.Link>
              <Nav.Link><Link to="/science">Science</Link></Nav.Link>
              <Nav.Link><Link to="/sports">Sports</Link></Nav.Link>
              <Nav.Link><Link to="/technology">Technology</Link></Nav.Link>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={this.props.buttonText}
                  onChange={(event) => { this.props.toggleMode(event) }}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}



