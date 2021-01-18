import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../Layout/NavigationBar";
import DashboardCards from "../Layout/DashboardCards";
import PageHeader from "../Layout/PageHeader";
import { FaTruck } from "react-icons/fa";
import { VscChecklist } from "react-icons/vsc";

export default function Dashboard() {
  return (
    <div className="vh-100 bg-info">
      <NavigationBar />
      <PageHeader title="Dashboard" />
      <Container className="bg-info mt-5" fluid>
        <Container fluid className="py-3 px-3">
          <Row>
            <Col className="d-flex justify-content-center mb-3">
              <DashboardCards
                title="Shipping Department"
                buttonTitle="Shipping"
                link="shipping"
                icon={<FaTruck />}
              />
            </Col>
            {/** Receiving Card */}
            <Col className="d-flex justify-content-center justify-content-between mb-3">
              <DashboardCards
                title="Receiving Department"
                buttonTitle="Receiving"
                link="receiving"
                icon={<VscChecklist />}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
