import axios from "axios";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Card,
  Button,
  Alert,
  Container,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function Verification(props) {

  const [isLoading, setLoading] = useState(true);
  const [loadingMessage, setloadingMessage] = useState('');
  const [result, setResult] = useState('');
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BACKEND_DOMAIN}getAllApplications/`)
      .then(res => {
        console.log(res.data);
        console.log(props.code);
      })
      .catch(error => {
        console.log('Error while fetching!');
      })
  }, []);

    const saveFile = (e) => {
        setFile(e.target.files[0]);
    };

  let uploadDocument = async () => {
   setloadingMessage('Loading .....')
   console.log('Inside');
    const formData = new FormData();
    formData.append("document", file);
    await axios.post(process.env.REACT_APP_BACKEND_DOMAIN + 'verifyDocument/', formData)
      .then(res => {
        console.log(res.data);
        if(res.data == 'Verified') {
            setResult('The Document is Successfully Verified!');
        } else {
            setResult('The Document is Unauthentic. Verification Failed!');
        }
      })
    setLoading(false)
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover" style={{paddingTop: '15px'}}>
              <Card.Header>
                <Card.Title as="h4"> <center> Verify Document </center> </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload the document for Verification</Form.Label>
                        <Form.Control type="file" name="document" onChange={saveFile} />
                        <Button variant="dark" onClick={uploadDocument} style={{marginTop: '25px', padding: '5px 20px'}}>Upload</Button>
                    </Form.Group>
                </Col>
                <br />
                <Row>
                    <Col>
                        <Alert variant="secondary" style={{margin: '0 25px 10px', textAlign: 'center', color: '#000'}}>
                        {isLoading ? 
                            <h2 style={{fontSize: '20px', margin: '10px 0'}}> {loadingMessage} </h2> : 
                            <h2 style={{fontSize: '20px', margin: '10px 0'}}> Result: {result} </h2>
                        }
                        </Alert>
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Verification;
