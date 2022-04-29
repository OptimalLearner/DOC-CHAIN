import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Card,
  Button,
  Table,
  Container,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function Applications(props) {

  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [doclink, setDoclink] = useState('');
  const [uid, setUID] = useState('');
  const [fullscreen, setFullscreen] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BACKEND_DOMAIN}getAllApplications/`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
        console.log(props.code);
      })
      .catch(error => {
        console.log('Error while fetching!');
      })
  }, []);

  let verifyDoc = (document) => {
    setModalShow(true);
    // axios.post(process.env.REACT_APP_BACKEND_DOMAIN + 'verifyCertificate/')
    //   .then(res => {
    //     if(res.data != 'Unable To Fetch Certificate') {
    //       console.log(res.data);
    //       setDoclink(res.data);
    //       setModalShow(true);
    //     } else {
    //       alert(res.data)
    //     }
    //   })
    //   .catch(error => {
    //     console.log('Error while getting document link!');
    //   })
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"> Active Applications </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                <thead>
                    <tr>
                      <th className="border-0">Name</th>
                      <th className="border-0">Job ID</th>
                      <th className="border-0">Job Position</th>
                      <th className="border-0">Result</th>
                      <th className="border-0">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map( item => {
                        return (
                          <tr key={item.name}>
                            <td> {item.name} </td>
                            <td> {item.job_id} </td>
                            <td> {item.position} </td>
                            <td> {item.result} </td>
                            <td><Button className="btn py-1" onClick={() => verifyDoc(item.document)}> Verify </Button> </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          doclink={doclink}
          fullscreen={fullscreen}
        />
      </Container>
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

export default Applications;
