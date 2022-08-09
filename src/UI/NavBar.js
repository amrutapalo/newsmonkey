import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Container style={this.props.style}>
          <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Form>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label={this.props.buttonText}
                  onChange={(event)=> {this.props.toggleMode(event)}}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
