import React, { useState } from "react";
import styles from "./Login.module.css";
import { Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import axios from "axios";
import {
  validateContact,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateUserType,
} from "../assets/validation/validations";

export const Login = ({ setLoginToken }) => {
  const [isRegistered, setIsRegistered] = useState(true);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Student");

  // Modal States
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // error or success modal
  const [saveMessage, setSaveMessage] = useState({});

  const authenticate = () => {
    console.log("loggingIn");

    const logginInData = {
      username: email,
      password: password,
    };

    try {
      logginInData.username = validateEmail(logginInData.username);
      logginInData.password = validatePassword(logginInData.password);

      axios
        .post("/login", logginInData)
        .then((res) => {
          console.log(res.data);
          setLoginToken(res.data);
        })
        .catch((e) => {
          console.log(e.response.data.errorMessage);
          setSaveMessage(e.response.data.errorMessage);
          setLoginToken(null);
          handleShow();
        });
    } catch (error) {
      console.log(error);
      setSaveMessage(error);
      handleShow();
    }
  };

  const signup = () => {
    console.log("signingup");
    const signUpData = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
      password: password,
      userType: type,
    };

    console.log(signUpData);

    try {
      signUpData.email = validateEmail(signUpData.email);
      signUpData.firstName = validateFirstName(signUpData.firstName);
      signUpData.lastName = validateLastName(signUpData.lastName);
      signUpData.userType = validateUserType(signUpData.userType);
      signUpData.contact = validateContact(signUpData.contact);
      signUpData.password = validatePassword(signUpData.password);

      axios
        .post("/signup", signUpData)
        .then((res) => {
          console.log("Done");
          setSaveMessage("Your account has been successfully created");
          handleShow();
          setIsRegistered();
        })
        .catch((e) => {
          console.log(e.response.data.errorMessage);
          setSaveMessage(e.response.data.errorMessage);
          handleShow();
          // setLoginToken("Encountered some error");
        });
      handleShow();
      // setIsRegistered(true);
    } catch (error) {
      setSaveMessage(error);
      handleShow();
    }

    // setLoginToken(true);
  };

  return (
    <div className={styles.loginContainer}>
      <Form className={styles.formStyles}>
        {!isRegistered ? (
          <Form.Group className="mb-3" controlId="username">
            <FloatingLabel
              controlId="floatingInput"
              label="User Type"
              className="mb-3"
            >
              <Form.Select onChange={(e) => setType(e.target.value)}>
                <option value="Student">Student</option>
                <option value="Broker">Broker</option>
              </Form.Select>
            </FloatingLabel>
            {/* <Form.Label>Username</Form.Label> */}
          </Form.Group>
        ) : null}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {isRegistered ? null : (
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.....maybe
              </Form.Text>
            )}
          </FloatingLabel>

          {!isRegistered ? (
            <div>
              <Form.Group className="mb-3" controlId="firstName">
                <FloatingLabel controlId="floatingInput" label="First Name">
                  <Form.Control
                    type="input"
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <FloatingLabel controlId="floatingInput" label="Last Name">
                  <Form.Control
                    type="input"
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contact">
                <FloatingLabel controlId="floatingInput" label="Contact">
                  <Form.Control
                    type="input"
                    placeholder="Enter Contact Details"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <Button
          variant="success"
          className={styles.formStyles}
          onClick={() => {
            isRegistered ? authenticate() : signup();
          }}
        >
          Submit
        </Button>
        {isRegistered ? (
          <div>Dont have an account yet?</div>
        ) : (
          <div>Have an account already?</div>
        )}

        <Button onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? <div>Signup</div> : <div>Login</div>}
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{saveMessage}</Modal.Body>
        {/* <Modal.Body>
          Please check your inbox/spam for your account details email
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
