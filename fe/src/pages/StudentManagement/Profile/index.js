import Title from '~/components/Title';
import Button from '~/components/Button';
import { Col, Container, Row } from 'react-bootstrap';

function StudentProfile() {
    return (
        <>
            <Title title={'Hồ sơ'} />
            <Container>
                <Row>
                    <Col>
                        <Button to={'/students/profile/add'} primary>
                            Thêm Học Viên
                        </Button>
                    </Col>
                    <Col>
                        <Button to={'/students/profile/list'} primary>
                            Danh sách học viên
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button to={'/students/profile/edit'} primary>
                            Chỉnh Sửa Học Viên
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default StudentProfile;
