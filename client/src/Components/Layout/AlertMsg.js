import React from "react";
import {Alert} from 'react-bootstrap'

export default function AlertMsg(props) {
  return (
    <>
      <Alert variant={props.alertVariant}>
        <Alert.Heading className="text-center">{props.alertTitle}</Alert.Heading>
        <p>{props.alertBody}</p>
      </Alert>
    </>
  );
}
