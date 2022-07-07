import Title from '~/components/Title';
import Button from '~/components/Button';
import { Col, Row } from 'react-bootstrap';

function StudentProfile() {
    return (
        <>
            <Title title={'Hồ sơ'} />
            <>
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
            </>
        </>
    );
}

export default StudentProfile;
