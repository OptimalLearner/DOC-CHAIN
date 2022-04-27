import React, { useEffect } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard(props) {
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                    <p className="card-category">1<sup>st</sup> Year</p>
                      <Card.Title as="h4">{props.fe}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history mr-1"></i>
                  Updated 24 hours ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                    <p className="card-category">2<sup>nd</sup> Year</p>
                      <Card.Title as="h4">{props.se}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history mr-1"></i>
                  Updated 24 hours ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                    <p className="card-category">3<sup>rd</sup> Year</p>
                      <Card.Title as="h4">{props.te}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history mr-1"></i>
                  Updated 24 hours ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">4<sup>th</sup> Year</p>
                      <Card.Title as="h4"> {props.be} </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history mr-1"></i>
                  Updated 24 hours ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Most Recent Verifiers</Card.Title>
              </Card.Header>
              <Card.Body>
              <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">UID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Branch</th>
                      <th className="border-0">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2020301073</td>
                      <td>Sahil</td>
                      <td>COMPS</td>
                      <td>Passed</td>
                    </tr>
                    <tr>
                      <td>2020301075</td>
                      <td>Keval</td>
                      <td>COMPS</td>
                      <td>Passed</td>
                    </tr>
                    <tr>
                      <td>2020301078</td>
                      <td>Rohan</td>
                      <td>COMPS</td>
                      <td>Passed</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
              <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  People viewed since last 24 hours
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Verifier Statistics</Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["10%", "90%"],
                      series: [10, 90],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Company <i className="fas fa-circle text-danger ml-4"></i>
                  Students
                </div>                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
