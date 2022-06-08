import { useRef, useState } from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Form, Tab, Tabs, Row, Col, Button, FormGroup, FormLabel, FormControl, Image } from 'react-bootstrap';

import axios from 'axios';
import Title from '~/components/Title';

const AddStudent = () => {
    const fileRef = useRef();
    const [studentImage, setStudentImage] = useState(null);
    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);
        axios.post('/upload', data).then((res) => {
            setStudentImage(res.data);
        });
    };
    return (
        <>
            <Title title={'Thêm Học Viên'} />
            <Form>
                <Tabs defaultActiveKey="student" transition={true} className="mb-3">
                    <Tab eventKey="student" title="Học Viên">
                        <Title title={'Học Viên'} />
                        <Row className="mb-3">
                            <Col>
                                <FormGroup as={Row} controlId="formFirstName">
                                    <FormLabel>Họ đệm</FormLabel>
                                    <FormControl type="text" placeholder="Nhập họ đệm" />
                                </FormGroup>
                                <FormGroup as={Row} controlId="formLastName">
                                    <FormLabel>Tên</FormLabel>
                                    <FormControl type="text" placeholder="Nhập tên" />
                                </FormGroup>
                            </Col>
                            <Col>
                                {studentImage ? (
                                    <Image src={studentImage.path} alt={studentImage.originalname} />
                                ) : (
                                    <FormGroup className="d-flex justify-content-center">
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            onClick={() => fileRef.current.click()}
                                            className="fa-5x border border-primary p-4"
                                            color="#009cff "
                                        />
                                        <FormControl
                                            type="file"
                                            ref={fileRef}
                                            accept="image/*"
                                            className="d-none"
                                            onChange={handleChangeFile}
                                        />
                                    </FormGroup>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formStudentId">
                                <FormLabel>Mã Học Viên</FormLabel>
                                <FormControl type="text" placeholder="Nhập mã học viên" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formGender">
                                <FormLabel>Giới tính</FormLabel>{' '}
                                <Form.Check
                                    name="gender"
                                    type={'radio'}
                                    id={'male'}
                                    label={'Nam'}
                                    defaultChecked
                                    value={1}
                                />
                                <Form.Check name="gender" type={'radio'} id={'female'} label={'Nữ'} value={0} />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formBankId">
                                <FormLabel>Số Tài Khoản</FormLabel>
                                <FormControl type="text" placeholder="Nhập số tài khoản" />
                            </FormGroup>
                            <FormGroup as={Col}>
                                <FormLabel>Ngân Hàng</FormLabel>
                                <Form.Select>
                                    <option>Chọn ngân hàng</option>
                                    <option value="1">Ngân hàng 1</option>
                                    <option value="2">Ngân hàng 2</option>
                                    <option value="3">Ngân hàng 3</option>
                                </Form.Select>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Chức vụ học viên</FormLabel>
                                <Form.Select>
                                    <option>Chọn chức vụ học viên</option>
                                    <option value="1">Chức vụ 1</option>
                                    <option value="2">Chức vụ 2</option>
                                    <option value="3">Chức vụ 3</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup as={Col}>
                                <FormLabel>Học kỳ</FormLabel>
                                <Form.Select>
                                    <option>Chọn học kỳ</option>
                                    <option value="1">Học kỳ 1</option>
                                    <option value="2">Học kỳ 2</option>
                                    <option value="3">Học kỳ 3</option>
                                </Form.Select>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formIdentifyId">
                                <FormLabel>CCCD/CMND</FormLabel>
                                <FormControl type="text" placeholder="Nhập CCCD/CMND" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formIdentifyDate">
                                <FormLabel>Ngày cấp</FormLabel>
                                <FormControl type="date" placeholder="Nhập ngày cấp" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formIdentifyAddress">
                                <FormLabel>Nơi cấp</FormLabel>
                                <FormControl type="text" placeholder="Nhập nơi cấp" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} lg={6} controlId="formBirthday">
                                <FormLabel>Ngày sinh</FormLabel>
                                <FormControl type="date" placeholder="Nhập ngày sinh" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formAddress">
                                <FormLabel>Địa chỉ</FormLabel>
                                <FormControl type="text" placeholder="Nhập địa chỉ" />
                            </FormGroup>
                        </Row>
                    </Tab>
                    <Tab eventKey="household" title="Hộ Khẩu">
                        <Title title="Hộ Khẩu" />
                        <FormGroup as={Col} controlId="formAddressProvince">
                            <FormLabel>Tỉnh/ Thành Phố</FormLabel>
                            <FormControl type="text" placeholder="Nhập tỉnh/ thành phố" />
                        </FormGroup>
                        <FormGroup as={Col} controlId="formAddressDistrict">
                            <FormLabel>Huyện/ Quận</FormLabel>
                            <FormControl type="text" placeholder="Nhập huyện/ quận" />
                        </FormGroup>
                        <FormGroup as={Col} controlId="formAddressWard">
                            <FormLabel>Xã/ Phường</FormLabel>
                            <FormControl type="text" placeholder="Nhập xã/ phường" />
                        </FormGroup>
                    </Tab>
                    <Tab eventKey="object" title="Đối tượng">
                        <Title title="Đối tượng" />
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Quốc tịch</FormLabel>
                                <Form.Select>
                                    <option>Chọn quốc tịch</option>
                                    <option value="1">Quốc tịch 1</option>
                                    <option value="2">Quốc tịch 2</option>
                                    <option value="3">Quốc tịch 3</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup as={Col}>
                                <FormLabel>Dân tộc</FormLabel>
                                <Form.Select>
                                    <option>Chọn dân tộc</option>
                                    <option value="1">Dân tộc 1</option>
                                    <option value="2">Dân tộc 2</option>
                                    <option value="3">Dân tộc 3</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup as={Col}>
                                <FormLabel>Tôn giáo</FormLabel>
                                <Form.Select>
                                    <option>Chọn tôn giáo</option>
                                    <option value="1">Tôn giáo 1</option>
                                    <option value="2">Tôn giáo 2</option>
                                    <option value="3">Tôn giáo 3</option>
                                </Form.Select>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Row} controlId="formWish">
                                <FormLabel>Trúng tuyển theo nguyện vọng</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Row} controlId="formGraduationYear">
                                <FormLabel>Năm tốt nghiệp</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Thành phần gia đình</FormLabel>
                                <Form.Select>
                                    <option value="1">Thành phần 1</option>
                                    <option value="2">Thành phần 2</option>
                                    <option value="3">Thành phần 3</option>
                                </Form.Select>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Đối tượng đào tạo</FormLabel>
                                <Form.Select>
                                    <option value="1">Đối tượng 1</option>
                                    <option value="2">Đối tượng 2</option>
                                    <option value="3">Đối tượng 3</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup as={Col}>
                                <FormLabel>Đơn vị liên kết</FormLabel>
                                <Form.Select>
                                    <option value="1">Đơn vị liên kết 1</option>
                                    <option value="2">Đơn vị liên kết 2</option>
                                    <option value="3">Đơn vị liên kết 3</option>
                                </Form.Select>
                            </FormGroup>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Liên Lạc">
                        <Title title="Liên lạc" />
                        <Row>
                            <FormGroup as={Col} controlId="formPersonPhone">
                                <FormLabel>Điện thoại cá nhân</FormLabel>
                                <FormControl type="text" placeholder="Nhập Điện thoại cá nhân" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formFamilyPhone">
                                <FormLabel>Điện thoại gia đình</FormLabel>
                                <FormControl type="text" placeholder="Nhập Điện thoại gia đình" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formOfficePhone">
                                <FormLabel>Điện thoại cơ quan</FormLabel>
                                <FormControl type="text" placeholder="Nhập Điện thoại cơ quan" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formEmail">
                                <FormLabel>Email</FormLabel>
                                <FormControl type="email" placeholder="Nhập Email" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="formNewsTo">
                                <FormLabel>Báo tin cho </FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formNewsToAddress">
                                <FormLabel>Ở đâu</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                    </Tab>
                    <Tab eventKey="info" title="Thông Tin Quân Nhân">
                        <Title title="Thông Tin Quân Nhân" />
                        <Row>
                            <FormGroup as={Col} controlId="DateJoinArmy">
                                <FormLabel>Tháng/ Năm nhập ngũ </FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="Level">
                                <FormLabel>Cấp bậc</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="CulturalLevel">
                                <FormLabel>Trình độ văn hoá</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="Unit">
                                <FormLabel>Đơn vị cử đi học</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="SalaryType">
                                <FormLabel>Loại lương</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="SalaryGroup">
                                <FormLabel>NHóm lương</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="SalaryLevel">
                                <FormLabel>Bậc lương</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup as={Col} controlId="SalaryFactor">
                                <FormLabel>Hệ số lương</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="SalaryDate">
                                <FormLabel>Tháng/ Năm nhận lương</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Service">
                                <FormLabel>Chức vụ</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Health">
                                <FormLabel>Sức khoẻ</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                    </Tab>
                    <Tab eventKey="other" title="Khác">
                        <Title title="Khác" />
                        <Row>
                            <FormGroup as={Col} controlId="JoinDateUnion">
                                <FormLabel>Ngày vào Đoàn</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="JoinDateParty">
                                <FormLabel>Ngày vào Đảng</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="EntryDate">
                                <FormLabel>Ngày vào trường</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="GraduationDate">
                                <FormLabel>Ngày ra trường</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Job">
                                <FormLabel>Nghề nghiệp/ Chức vụ</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Laudatory">
                                <FormLabel>Khen thưởng</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Discipline">
                                <FormLabel>Kỷ luật</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col} controlId="Note">
                                <FormLabel>Ghi chú</FormLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </Row>
                    </Tab>
                </Tabs>
                <Button variant="primary" type="submit" className="mt-3">
                    Thêm học viên
                </Button>
            </Form>
        </>
    );
};
export default AddStudent;
