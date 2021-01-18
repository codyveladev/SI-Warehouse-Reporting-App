import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { VscAdd, VscChromeClose } from "react-icons/vsc";
import { IoSendSharp } from "react-icons/io5";
import ConformationModal from "../Layout/ConfirmationModal";
import AlertMsg from "../Layout/AlertMsg";
const axios = require("axios");

export default function FormField() {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      PO: "",
      vendor: "",
      receiver: "",
      materialsType: "",
      status: "",
      notes: "",
      reqDate: "",
    },
  ]);

  const [msg, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);

    /**
     * Make the call to the API to send the email with the input
     * The input fields will be passed in the body of the API call
     */

    let body = inputFields;

    try {
      let res = await axios.post("http://localhost:8080/report", body);
      if (res.status === 200) {
        let displaySuccessMsg = (
          <AlertMsg
            alertVariant="success"
            alertTitle="Success!"
            alertBody="Report has been emailed!"
          ></AlertMsg>

        );
        setMessage(displaySuccessMsg);
        handleClose();
        setTimeout(() => {setMessage(""); window.location.reload()}, 3000);
      }
    } catch (error) {
      let displayErrorMsg = (
        <AlertMsg
          alertVariant="danger"
          alertTitle="Error!"
          alertBody={error}
        ></AlertMsg>
      );
      setMessage(displayErrorMsg);
      handleClose();
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        PO: "",
        vendor: "",
        receiver: "",
        materialsType: "",
        status: "",
        notes: "",
        reqDate: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center px-5">{msg}</div>
      </Container>
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <Form.Row
              className={
                index % 2 === 1
                  ? "border border-dark p-2 mx-2 d-flex bg-white justify-content-start text-proimary mw-100"
                  : "border border-dark my-2 mx-2 p-2 bg-secondary text-white mw-100"
              }
            >
              <Form.Group as={Col} controlId="formGridPO">
                <Form.Label className="label">PO</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="PO"
                  value={inputField.PO}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridVendor">
                <Form.Label className="label">Vendor</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="vendor"
                  value={inputField.vendor}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPO">
                <Form.Label className="label">Receiver</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="receiver"
                  value={inputField.receiver}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGroupMt">
                <Form.Label className="label">Materials Type</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="materialsType"
                  value={inputField.materialsType}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label className="label">Status</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="status"
                  value={inputField.status}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNotes">
                <Form.Label className="label">Notes</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="notes"
                  value={inputField.notes}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridReqDate">
                <Form.Label className="label">
                  <em>
                    Required Date <small>if incomplete</small>
                  </em>
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="reqDate"
                  value={inputField.reqDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </Form.Group>

              <Button
                disabled={index === 0 ? 1 : 0} //0 is false 1 is true
                className="px-3 mt-4 mb-3 mx-3"
                variant="danger"
                size="sm"
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <VscChromeClose className="lead" />
              </Button>
            </Form.Row>
          ))}
          <Row className="mt-4 pb-5 d-flex justify-content-center">
            <Button
              className="mx-3"
              size="lg"
              variant="secondary"
              onClick={handleAddFields}
            >
              <VscAdd />
              Add Row
            </Button>
            <Button size="lg" variant="primary" onClick={handleShow}>
              Send Report <IoSendSharp />
            </Button>
          </Row>
          <ConformationModal
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        </Form>
      </Container>
    </div>
  );
}
