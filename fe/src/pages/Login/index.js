import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Image from '../../components/Image';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [dataRes, setDataRes] = useState([]);
    const [resCode, setResCode] = useState(0);
    function validateForm() {
        return email.includes('@') && password.length > 8;
    }

    const redirect = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post('http://localhost:3001/login', {
                email,
                password,
            })
            .then((res) => {
                setResCode(res.data.code);
                if (resCode === 200) {
                    setDataRes(res.data.result);
                    redirect('/');
                }
            });
    }

    return (
        <Container className="Login">
            <Row>
                <Col lg={3}>
                    <Image isLogo alt={'logo'} />
                </Col>
                <Col lg={9} className="d-flex justify-content-center align-items-center">
                    <h5 className="text-primary navbar-brand-name fw-bold">Quản Lý Sinh Viên</h5>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {resCode === 404 && <div className="text-warning"> Username or password is incorrect</div>}
                        <Button block="true" size="lg" type="submit" disabled={!validateForm()} className="mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
