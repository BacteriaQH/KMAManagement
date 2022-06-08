import { Col, Row } from 'react-bootstrap';

import Button from '~/components/Button';
import Title from '~/components/Title';

function GradeManagement() {
    return (
        <>
            <Title title={'Quản lý điểm'} />
            <Row>
                <Col>
                    <Button to="/grades/add" primary>
                        {' '}
                        Thêm điểm
                    </Button>
                </Col>
                <Col>
                    <Button to="/grades/find" primary>
                        {' '}
                        Tra cứu điểm
                    </Button>
                </Col>
            </Row>
            <Row></Row>
        </>
    );
}

export default GradeManagement;
