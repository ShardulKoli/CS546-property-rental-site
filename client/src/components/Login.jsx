import React, { useState } from "react";
import styles from "./Login.module.css";
import { Form, Button, FloatingLabel } from "react-bootstrap";

export const Login = ({ setLoginToken }) => {
  const [isRegistered, setIsRegistered] = useState(true);

  // TODO: Auntenticate User

  const authenticate = () => {
    setLoginToken(true);
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
              {/* <Form.Control
                className={styles.inputStyles}
                type="text"
                placeholder="Enter Username"
              /> */}
              <Form.Select>
                <option>Broker</option>
                <option>Student</option>
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
            <Form.Control type="email" placeholder="Enter email" />
          </FloatingLabel>

          {isRegistered ? null : (
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.....maybe
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className={styles.formStyles}
          onClick={() => authenticate()}
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
    </div>
  );
};
