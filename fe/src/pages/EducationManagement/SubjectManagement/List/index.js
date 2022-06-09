import { useRef, useState } from 'react';

import { FormGroup, Table, Button as ButtonBootstrap, FormControl, Tabs, Tab, FormLabel, Col } from 'react-bootstrap';

import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as xlsx from 'xlsx';

import Title from '~/components/Title';
import Button from '~/components/Button';

function ListSubject() {
    const [showExcel, setShowExcel] = useState(false);
    const [excelHeaderValue, setExcelHeaderValue] = useState([]);
    const [excelBodyValue, setExcelBodyValue] = useState([]);
    const valueFetch = false;
    const fileRef = useRef();

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = xlsx.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = xlsx.utils.sheet_to_json(ws, { header: 1 });
            data.splice(0, 3);
            const header = data.splice(0, 1);
            setShowExcel(true);
            setExcelHeaderValue(header);
            setExcelBodyValue(data);
        };
        reader.readAsBinaryString(file);
    };

    const handleDelete = () => {
        return;
    };
    return (
        <>
            <Title title="Danh sách môn học" />
            <Tabs defaultActiveKey={'list'} transition className="m-3">
                <Tab eventKey={'list'} title="Danh sách môn học">
                    <FormGroup as={Col}>
                        <FormLabel>Tra cứu</FormLabel>
                        <br />
                        <ButtonBootstrap variant="primary" type="submit">
                            Tra cứu
                        </ButtonBootstrap>
                        <ButtonBootstrap variant="primary" className="ms-1" disabled={!valueFetch}>
                            Xuất excel
                        </ButtonBootstrap>
                    </FormGroup>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên môn</th>
                                <th scope="col">Mã môn học</th>
                                <th scope="col">Khoa</th>
                                <th scope="col">Tổng số tiết</th>
                                <th scope="col">Số tiết lý thuyết</th>
                                <th scope="col">Số tiết thực hành</th>
                                <th scope="col">Số tiết bài tập</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Cơ sở dữ liệu</td>
                                <td>CSDL01</td>
                                <td>Công nghệ thông tin</td>
                                <td>10</td>
                                <td>5</td>
                                <td>3</td>
                                <td>2</td>
                                <td>
                                    <a className="btn btn-primary btn-sm" href="/">
                                        <FontAwesomeIcon icon={faPenSquare} />
                                    </a>
                                    <Button to={'/students/profile/delete'} danger sm onclick={handleDelete}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={'import'} title="Import file excel">
                    <FormGroup>
                        <ButtonBootstrap onClick={() => fileRef.current.click()} className="m-2">
                            Nhập file excel
                        </ButtonBootstrap>
                        <FormControl
                            type="file"
                            ref={fileRef}
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            className="d-none"
                            onChange={handleChangeFile}
                        />
                    </FormGroup>
                    <input type="hidden" value={excelBodyValue} />
                    {showExcel && (
                        <>
                            <Title title="Preview" />
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        {excelHeaderValue[0].map((item, index) => (
                                            <th scope="col" key={index}>
                                                {item}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {excelBodyValue.map((items, index) => (
                                        <tr key={index}>
                                            {items.map((item, index) => (
                                                <th scope="col" key={index}>
                                                    {item}
                                                </th>
                                            ))}
                                            <td>
                                                <a className="btn btn-primary btn-sm" href="/">
                                                    <FontAwesomeIcon icon={faPenSquare} />
                                                </a>
                                                <Button
                                                    to={'/students/profile/delete'}
                                                    danger
                                                    sm
                                                    onclick={handleDelete}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}
                </Tab>
            </Tabs>
        </>
    );
}

export default ListSubject;
