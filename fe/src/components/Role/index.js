import { forwardRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillCaretDownFill } from 'react-icons/bs';

import Image from '../Image';
import Button from '../Button';

const Dropdown = () => {
    return (
        <span className="d-flex flex-column bg-light border rounded-3">
            <Button to="/setting" primary={true}>
                Cài đặt
            </Button>
            <Button to="/logout" primary={true}>
                Đăng xuất
            </Button>
        </span>
    );
};

const Icon = forwardRef((props, ref) => {
    return <BsFillCaretDownFill ref={ref} />;
});
const Role = ({ showDropdown }) => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <Image isAvatar isMale alt="avatar" />
                </Col>
                <Col lg={8}>
                    <Row>
                        <Col lg={8}>
                            <Row>Văn Hoàng Phúc</Row>
                            <Row>Admin</Row>
                        </Col>
                        <Col lg={2}>
                            {showDropdown && (
                                <div>
                                    <Tippy
                                        placement="bottom"
                                        interactive
                                        render={(attrs) => <Dropdown tabIndex="-1" {...attrs} />}
                                    >
                                        <span>
                                            {' '}
                                            <Icon />
                                        </span>
                                    </Tippy>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Role;
