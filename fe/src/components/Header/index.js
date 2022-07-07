import { Col, Row } from 'react-bootstrap';

import Role from '../Role';
import Image from '../Image';

function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
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
