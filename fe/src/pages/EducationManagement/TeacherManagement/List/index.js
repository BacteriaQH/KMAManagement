import { useRef, useState } from 'react';

import { FormGroup, Table, Button as ButtonBootstrap, FormControl, Tabs, Tab, FormLabel, Col } from 'react-bootstrap';

import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import * as xlsx from 'xlsx';

import Title from '~/components/Title';
import Button from '~/components/Button';

function ListTeacher() {
    const fileRef = useRef();
    const [showExcel, setShowExcel] = useState(false);
    const [excelHeaderValue, setExcelHeaderValue] = useState([]);
    const [excelBodyValue, setExcelBodyValue] = useState([]);
    const [dataFetch, setDataFetch] = useState([]);
    const valueFetch = [
        {
            STT: 1,
            'Tên giảng viên': 'Nguyễn Văn A',
            'Mã giảng viên': 'GV001',
            Khoa: 'Công nghệ thông tin',
            Email: 'nva@gmail.com',
            SDT: '0123456789',
        },
        {
            STT: 2,
            'Tên giảng viên': 'Nguyễn Văn A',
            'Mã giảng viên': 'GV002',
            Khoa: 'Công nghệ thông tin',
            Email: 'nva@gmail.com',
            SDT: '0123456789',
        },
        {
            STT: 3,
            'Tên giảng viên': 'Nguyễn Văn A',
            'Mã giảng viên': 'GV002',
            Khoa: 'Công nghệ thông tin',
            Email: 'nva@gmail.com',
            SDT: '0123456789',
        },
        {
            STT: 4,
            'Tên giảng viên': 'Nguyễn Văn A',
            'Mã giảng viên': 'GV002',
            Khoa: 'Công nghệ thông tin',
            Email: 'nva@gmail.com',
            SDT: '0123456789',
        },
        {
            STT: 5,
            'Tên giảng viên': 'Nguyễn Văn A',
            'Mã giảng viên': 'GV002',
            Khoa: 'Công nghệ thông tin',
            Email: 'nva@gmail.com',
            SDT: '0123456789',
        },
    ];

    const ExportToExcel = () => {
        const worksheet = xlsx.utils.json_to_sheet(valueFetch);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        xlsx.writeFile(workbook, 'DataSheet.xlsx');
    };
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
    const handleData = () => {
        axios.get('http://localhost:3001/teacher').then((res) => setDataFetch(res.data));
    };
    return (
        <>
            <Title title="Danh sách giảng viên" />
            <Tabs defaultActiveKey={'list'} transition className="m-3">
                <Tab eventKey={'list'} title="Danh sách giảng viên">
                    <FormGroup as={Col}>
                        <FormLabel>Tra cứu</FormLabel>
                        <br />
                        <ButtonBootstrap variant="primary" type="submit" onClick={handleData}>
                            Tra cứu
                        </ButtonBootstrap>
                        <ButtonBootstrap
                            variant="primary"
                            type="submit"
                            className="ms-1"
                            disabled={!valueFetch}
                            onClick={ExportToExcel}
                        >
                            Xuất excel
                        </ButtonBootstrap>
                    </FormGroup>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Họ và Tên</th>
                                <th scope="col">Mã giảng viên</th>
                                <th scope="col">Khoa</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nguyễn Văn A</td>
                                <td>GV001</td>
                                <td>Công nghệ thông tin</td>
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

export default ListTeacher;
