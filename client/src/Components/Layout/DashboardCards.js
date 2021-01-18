import React from "react";
import { Card, Button } from "react-bootstrap";

export default function DashboardCards(props) {
  const setDesc = () => {
    if (props.title === "Shipping Department") {
      return (
        <p className="lead">
          Automatically generate and send reports regarding the Shipping
          department.
        </p>
      );
    } else {
      return (
        <p className="lead">
          Automatically generate and send reports regarding the Receiving
          department.
        </p>
      );
    }
  };
  return (
    <>
      <Card className="border border-secondary">
        <Card.Header className="border-bottom border-secondary">
          <Card.Title className="text-center text-primary">
            <h2>
              {props.title} {props.icon}
            </h2>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{setDesc()}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-top border-secondary">
          <Button
            className="btn btn-block"
            variant="primary"
            href={`/${props.link}`}
          >
            {`Go to ${props.buttonTitle} page`}
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
