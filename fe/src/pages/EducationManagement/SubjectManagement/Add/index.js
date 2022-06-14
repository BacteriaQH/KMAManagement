import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap';
import Title from '../../../../components/Title';

function AddSubject() {
    return (
        <Form>
            <Title title={'Thêm môn học'} />
            <Row>
                <FormGroup as={Col} controlId="formSubjectName">
                    <FormLabel>Tên môn</FormLabel>
                    <FormControl type="text" placeholder="Nhập Tên môn" />
                </FormGroup>
                <FormGroup as={Col} controlId="formSubjectId">
                    <FormLabel>Mã học phần</FormLabel>
                    <FormControl type="text" placeholder="Nhập Mã học phần" />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel>Khoa</FormLabel>
                    <FormSelect>
                        <option>Chọn khoa</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel>Kỳ</FormLabel>
                    <FormSelect>
                        <option>Chọn kỳ</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
            </Row>
            <Row>
                <FormGroup as={Col} controlId="formAll">
                    <FormLabel>Tổng số tiết</FormLabel>
                    <FormControl type="number" placeholder="Nhập Tổng số tiết" />
                </FormGroup>
                <FormGroup as={Col} controlId="formTheory">
                    <FormLabel>Số tiết lý thuyết</FormLabel>
                    <FormControl type="number" placeholder="Nhập Số tiết lý thuyết" />
                </FormGroup>
                <FormGroup as={Col} controlId="formPractice">
                    <FormLabel>Số tiết thực hành</FormLabel>
                    <FormControl type="number" placeholder="Nhập Số tiết thực hành" />
                </FormGroup>
                <FormGroup as={Col} controlId="formExercise">
                    <FormLabel>Số tiết bài tập</FormLabel>
                    <FormControl type="number" placeholder="Nhập Số tiết bài tập" />
                </FormGroup>
            </Row>
            <Button type="submit" variant="primary" className="m-3">
                Thêm môn học
            </Button>
        </Form>
    );
}

export default AddSubject;
