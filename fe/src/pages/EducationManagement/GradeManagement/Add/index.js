import { Col, Form, FormGroup, FormLabel, FormSelect, Row, Button } from 'react-bootstrap';
import Title from '~/components/Title';

function AddGrade() {
    return (
        <>
            <Title title="Thêm điểm" />
            <Form>
                <Row>
                    <FormGroup as={Col}>
                        <FormLabel>Năm học</FormLabel>
                        <FormSelect>
                            <option>Chọn năm học</option>
                            <option value="1">Ngân hàng 1</option>
                            <option value="2">Ngân hàng 2</option>
                        </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col}>
                        <FormLabel>Kỳ học</FormLabel>
                        <FormSelect>
                            <option>Chọn kỳ học</option>
                            <option value="1">Ngân hàng 1</option>
                            <option value="2">Ngân hàng 2</option>
                            <option value="3">Ngân hàng 3</option>
                        </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col}>
                        <FormLabel>Học phần</FormLabel>
                        <FormSelect>
                            <option>Chọn học phần</option>
                            <option value="1">Ngân hàng 1</option>
                            <option value="2">Ngân hàng 2</option>
                            <option value="3">Ngân hàng 3</option>
                        </FormSelect>
                    </FormGroup>
                    <FormGroup as={Col}>
                        <FormLabel>Lớp</FormLabel>
                        <FormSelect>
                            <option>Chọn lớp</option>
                            <option value="1">Ngân hàng 1</option>
                            <option value="2">Ngân hàng 2</option>
                            <option value="3">Ngân hàng 3</option>
                        </FormSelect>
                    </FormGroup>
                </Row>
                <Button variant="primary" type="submit" className="m-3">
                    {' '}
                    Lấy danh sách học viên
                </Button>
            </Form>
        </>
    );
}

export default AddGrade;
