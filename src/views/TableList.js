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

function TableList(props) {

  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [doclink, setDoclink] = useState('');
  const [uid, setUID] = useState('');
  const [fullscreen, setFullscreen] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BACKEND_DOMAIN}getStudentDetails/`+props.code)
      .then(res => {
        console.log(res.data)
        setData(res.data);
        console.log(props.code)
      })
      .catch(error => {
        console.log('Error while fetching!');
      })
  }, []);

  let getDocLink = (uid) => {
    axios.post(process.env.REACT_APP_BACKEND_DOMAIN + 'viewCertificate/' + uid)
      .then(res => {
        if(res.data != 'Unable To Fetch Certificate') {
          console.log(res.data);
          setDoclink(res.data);
          setModalShow(true);
        } else {
          alert(res.data)
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
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"> TE COMPS </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                <thead>
                    <tr>
                      <th className="border-0">UID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Branch</th>
                      <th className="border-0">Result</th>
                      <th className="border-0">Marksheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map( item => {
                        return (
                          <tr key={item.uid}>
                            <td> {item.uid} </td>
                            <td> {item.name} </td>
                            <td> {item.department} </td>
                            <td> PASSED </td>
                            <td><Button className="btn py-1" onClick={() => {setModalShow2(true); setUID(item.uid)}}> Upload </Button> <Button className="btn py-1" onClick={() => getDocLink(item.uid)}> View </Button> </td>
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

        <UploadModal 
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        uid={uid}
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

function UploadModal(props) {
  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  let upload = (uid) => {
    console.log('Upload ', + uid);
    const formData = new FormData();
    formData.append("image", file);
    
    axios.post(process.env.REACT_APP_BACKEND_DOMAIN + 'uploadCertificate/' + uid, formData)
      .then(res => {
        console.log(res.data);
        alert('Uploaded The Certificate')
      })
  }


  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
    >

      <Modal.Body>
      <Form enctype="multipart/form-data">
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label> Upload Certificate </Form.Label>
          <Form.Control type="file" name="image" onChange={saveFile} size="lg" />
          <Button className="mt-4" onClick={() => {upload(props.uid); props.onHide}}>Submit</Button>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TableList;
