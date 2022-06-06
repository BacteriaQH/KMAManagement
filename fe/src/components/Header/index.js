import { Col, Container, Row } from 'react-bootstrap';

import Role from '../Role';
import Image from '../Image';

function Header() {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <Row>
                        <Col lg={3}>
                            <Image isLogo alt={'logo'} />
                        </Col>
                        <Col lg={9} className="d-flex justify-content-center align-items-center">
                            <h5 className="text-primary navbar-brand-name fw-bold">Quản Lý Sinh Viên</h5>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}></Col>
                <Col lg={3}>
                    <Row>
                        {' '}
                        <Role showDropdown={true} />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;