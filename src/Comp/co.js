import { Col, Nav, Row, Tab } from "react-bootstrap";
function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h5>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores sit dolores minima, velit et sequi at delectus dicta
                consectetur necessitatibus ad provident aperiam, vel quae
                consequuntur impedit optio, fugiat quidem?
              </h5>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique aut ratione qui eum praesentium fugit nisi atque
              inventore, animi quaerat, aperiam nihil itaque reiciendis vitae
              enim, iure error odit. Deleniti!
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
