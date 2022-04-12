import {useHistory} from 'react-router-dom';
import React from "react";
import { Form, Button } from "react-bootstrap";
import Header from "../../../Components/Header/Header"

function Login() {
  let history = useHistory();

  return (
    <div>
      <Header></Header>
      <div style={{width: "50%", margin: "0 auto"}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}
      </div>
    
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        ds
      </button>
    </div>
  );
}


export default Login;