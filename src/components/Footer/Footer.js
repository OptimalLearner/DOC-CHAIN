import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <span>DOC-CHAIN</span> | 
              All Rights Reserved
            </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
