import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRef, useState } from 'react';
import { Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Image, Row } from 'react-bootstrap';
import Title from '../../../../components/Title';

function AddTeacher() {
    const fileRef = useRef();
    const [image, setImage] = useState('');
    const handleChangeFile = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', e.target.files[0]);
        axios.post('http://localhost:3000/api/upload', data, {}).then((res) => {
            setImage(res.data);
        });
    };
    return (
        <>
            <Title title={'Thêm giảng viên'} />
            <Row className="mb-3">
                <Col>
                    <FormGroup as={Row} controlId="formFirstName">
                        <FormLabel>Họ đệm</FormLabel>
                        <FormControl type="text" placeholder="Nhập họ đệm" name="firstName" />
                    </FormGroup>
                    <FormGroup as={Row} controlId="formLastName">
                        <FormLabel>Tên</FormLabel>
                        <FormControl type="text" placeholder="Nhập tên" name="lastName" />
                    </FormGroup>
                </Col>
                <Col className="d-flex justify-content-center">
                    {image ? (
                        <>
                            <Image
                                src={`http://localhost:3000/api/${image.filename}`}
                                alt={image.filename}
                                height={'150px'}
                            />
                            <input type={'hidden'} value={`http://localhost:3000/api/${image.filename}`} name="image" />
                        </>
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
            <Row className="mb-3">
                <FormGroup as={Col} controlId="formStudentId">
                    <FormLabel>Mã giảng viên</FormLabel>
                    <FormControl type="text" placeholder="Nhập mã giảng viên" name="code" />
                </FormGroup>
                <FormGroup as={Col} controlId="formGender">
                    <FormLabel>Giới tính</FormLabel>{' '}
                    <FormCheck name="gender" type={'radio'} id={'male'} label={'Nam'} defaultChecked value={1} />
                    <FormCheck name="gender" type={'radio'} id={'female'} label={'Nữ'} value={0} />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel>Khoa</FormLabel>
                    <FormSelect name="department">
                        <option>Chọn khoa</option>
                        <option value="1">Ngân hàng 1</option>
                        <option value="2">Ngân hàng 2</option>
                        <option value="3">Ngân hàng 3</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup as={Col} controlId="formPhoneNumber">
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormControl type="text" placeholder="Nhập số điện thoại" name="phone" />
                </FormGroup>
            </Row>
            <Row>
                <FormGroup as={Col}>
                    <FormLabel>Ngày sinh</FormLabel>
                    <FormControl type="date" name="dob" />
                </FormGroup>
                <FormGroup as={Col} controlId="formPhoneNumber">
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" placeholder="Nhập email" name="email" />
                </FormGroup>
            </Row>
        </>
    );
}

export default AddTeacher;
