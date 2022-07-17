import { Col, Row } from 'react-bootstrap';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

function TeacherProfile() {
    return (
        <>
            <Title title={'Quản lý giảng viên'} />
            <Row>
                <Col>
                    <Button to={'/teachers/profile/add'} primary>
                        Thêm giảng viên
                    </Button>
                </Col>
                <Col>
                    <Button to={'/teachers/profile/list'} primary>
                        Danh sách giảng viên
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
        </>
    );
}

export default TeacherProfile;
