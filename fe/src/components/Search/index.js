const { Form, Row, FormGroup, Col, FormLabel, FormSelect, Button } = require('react-bootstrap');

const Search = ({ showStudentSelect = false, showSubjectSelect = false }) => {
    // showStudentSelect = true;
    // showSubjectSelect = true;
    return (
        <>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel>Địa điểm</FormLabel>
                    <FormSelect>
                        <option>Chọn địa điểm</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel>Khoá</FormLabel>
                    <FormSelect>
                        <option>Chọn khoá</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
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
                    <FormLabel>Ngành</FormLabel>
                    <FormSelect>
                        <option>Chọn ngành</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
            </Row>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel>Lớp</FormLabel>
                    <FormSelect>
                        <option>Chọn lớp</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup as={Col}>
                    <FormLabel>Loại</FormLabel>
                    <FormSelect>
                        <option>Chọn loại</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
                {showStudentSelect && (
                    <FormGroup as={Col}>
                        <FormLabel>Học viên</FormLabel>
                        <FormSelect>
                            <option>Chọn học viên</option>
                            <option value="1">Ngân hàng 1</option>
                            <option value="2">Ngân hàng 2</option>
                            <option value="3">Ngân hàng 3</option>
                        </FormSelect>
                    </FormGroup>
                )}
                {showSubjectSelect && (
                    <Row>
                        <FormGroup as={Col} controlId="formSubject">
                            <FormLabel>Loại học phần</FormLabel>{' '}
                            <Form.Check name="subject" type={'radio'} id={'all'} label={'Tất cả'} checked value={1} />
                            <Form.Check name="subject" type={'radio'} id={'2nd'} label={'Nhóm ngành 2'} value={0} />
                        </FormGroup>
                        <FormGroup as={Col}>
                            <FormLabel>Học phần</FormLabel>
                            <FormSelect>
                                <option>Toàn bộ</option>
                                <option value="1">Ngân hàng 1</option>
                                <option value="2">Ngân hàng 2</option>
                                <option value="3">Ngân hàng 3</option>
                            </FormSelect>
                        </FormGroup>
                    </Row>
                )}
                <FormGroup as={Col}>
                    <FormLabel>Tra cứu</FormLabel>
                    <br />
                    <Button variant="primary" type="submit">
                        Tra cứu
                    </Button>
                    <Button variant="primary" type="submit" className="ms-1">
                        Xuất excel
                    </Button>
                </FormGroup>
            </Row>
        </>
    );
};

export default Search;
