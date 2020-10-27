import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import { FaBeer } from 'react-icons/fa';
import { BiCctv, BiLaptop, BiCog } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
// core components

function SectionServices() {
  return (
    <>
      <a name="more-infos"></a>
      <div className="section text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">bla bla bla <strong>bla bla bla</strong> bla bla blabla bla bla <strong>bla bla bla</strong> bla bla blabla!</h2>
              <h5 className="title">
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                </h5>
              <br />
              <Button
                className="btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                read more
                </Button>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <BiCctv />
                </div>
                <div className="description">
                  <h4 className="info-title">SECURITY CAMERAS (CCTV)</h4>
                  <p className="description">
                    Keep track of everything on your cell phone screen in your home or office.
                    </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    read more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <BiLaptop />
                </div>
                <div className="description">
                  <h4 className="info-title">COMPUTER MAINTENANCE</h4>
                  <p>
                    Maintenance services on computers and notebooks (Windows - Apple).
                    </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    read more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <BsPhone />
                </div>
                <div className="description">
                  <h4 className="info-title">CELL PHONE MAINTENANCE</h4>
                  <p>
                    Maintenance of Iphones, tablets and smartphones in general.
                    (Android and IOS)
                    </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    read more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <BiCog />
                </div>
                <div className="description">
                  <h4 className="info-title">SOFTWARE INSTALLATION</h4>
                  <p>
                    Installation and support of software for computers and cell phones.
                    </p>
                  <Button className="btn-link" color="info" href="#pablo">
                    read more
                    </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {" "}
    </>
  );
}

export default SectionServices;
