import React, { useState, useEffect } from "react";
import axios from "axios";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Navbar,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function StudentDashboard(props) {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [doclink, setDoclink] = useState('');
  const [uid, setUID] = useState('');
  const [fullscreen, setFullscreen] = useState(true);

  let getDocLink = (uid) => {
    console.log('get doc link');
    axios.post(process.env.REACT_APP_BACKEND_DOMAIN + 'viewCertificate/' + uid)
      .then(res => {
        if(res.data != 'Unable To Fetch Certificate') {
          console.log(res.data);
          setDoclink(res.data);
          setModalShow(true);
        } else {
          alert('Marksheet not uploaded by the institute');
        }
      })
      .catch(error => {
        console.log('Error while getting document link!');
      })
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"> Student Information </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>College</label>
                        <Form.Control
                          defaultValue={props.data.institute}
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>UID</label>
                        <Form.Control
                          defaultValue={props.data.uid}
                          disabled
                          placeholder="Unique ID"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email Id (provided by institute)
                        </label>
                        <Form.Control
                          defaultValue={props.data.email}
                          placeholder="Email"
                          disabled
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          defaultValue={props.data.name}
                          disabled
                          placeholder="John"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="8">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          placeholder="Doe"
                          defaultValue={props.data.address}
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          placeholder="City"
                          defaultValue={props.data.city}
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          placeholder="Country"
                          defaultValue={props.data.country}
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          defaultValue={props.data.postal_code}
                          disabled
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Department</label>
                        <Form.Control
                          placeholder="COMPS"
                          defaultValue={props.data.department}
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Class</label>
                        <Form.Control
                          placeholder="FE / SE / TE / BE"
                          defaultValue={props.data.class}
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1 mt-4" md="4">
                      <Form.Group>
                      <label></label>
                      <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                      >
                        Update Student Profile
                      </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title as="h4"> Document Information </Card.Title>
              </Card.Header>
              <Card.Body>
              <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Document Type</label>
                        <Form.Control
                          placeholder="COMPS"
                          defaultValue="Marksheet"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Result Status</label>
                        <Form.Control
                          placeholder="FE / SE / TE / BE"
                          defaultValue="Passed"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1 mt-4" md="4">
                      <Form.Group>
                      <label></label>
                      <Button
                        className="btn-fill pull-right"
                        type="button"
                        variant="info"
                        onClick={() => getDocLink(props.code)}
                      >
                        View Certificate
                      </Button>
                      </Form.Group>
                    </Col>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          doclink={doclink}
          fullscreen={fullscreen}
        />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      fullscreen={props.fullscreen}
    >

      <Modal.Body>
      <iframe src={props.doclink} style={{height: '100%', width: '100%'}} frameborder="0"></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentDashboard;
