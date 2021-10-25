import Button from "react-bootstrap/Button";
import React from "react";
import { Card, Container, Form } from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <Container className="mt-3 mb-5">
                <Card>
                    <Card.Body>
                        <Card.Title>Log In</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-left">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="danger" type="submit">
                                    Log In
                                </Button>
                            </Form>
                        </Card.Text>
                        <Card.Text>OR</Card.Text>
                        <div className="d-flex flex-column justify-content-center">
                            <Button className="mb-2" variant="primary">LOG IN WITH Facebook</Button>
                            <Button className="mb-2" variant="success">LOG IN WITH Google</Button>
                            <Button className="mb-2" variant="dark">LOG IN WITH Apple</Button>
                        </div>
                        <Card.Text>Need an account?Sign-up</Card.Text>
                        <Card.Text>Forget your Password?</Card.Text>
                    </Card.Body>
                </Card>            
            </Container>
        </div>
    );
};

export default Login;