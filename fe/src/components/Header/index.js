import { Button, Col, Row } from 'react-bootstrap';

import Role from '../Role';
import Image from '../Image';
import { Link } from 'react-router-dom';

function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <Row>
                <Col lg={3}>
                    <Row>
                        <Col lg={3}>
                            <Link to={'/'}>
                                <Image isLogo alt={'logo'} />
                            </Link>
                        </Col>
                        <Col lg={9} className="d-flex justify-content-center align-items-center">
                            <Link to={'/'} as={Button}>
                                <h6 className="text-primary navbar-brand-name fw-bold">Quản Lý Sinh Viên</h6>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}></Col>
                <Col lg={4}>
                    <Row>
                        {' '}
                        <Role showDropdown={true} name={user?.name} role={user?.roleid} />
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Header;
