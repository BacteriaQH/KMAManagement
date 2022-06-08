import { useRef, useState } from 'react';
import { Col, FormGroup, FormLabel, Tab, Tabs, Button as ButtonBootstrap, Table, FormControl } from 'react-bootstrap';
import * as xlsx from 'xlsx';
import Search from '~/components/Search';
import Title from '~/components/Title';

function FindGrade() {
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

            data.splice(0, 1);
            const header = data.splice(0, 2);
            setShowExcel(true);
            setExcelHeaderValue(header);
            setExcelBodyValue(data);
        };
        reader.readAsBinaryString(file);
    };
    return (
        <>
            <Title title={'Tra cứu điểm'} />
            <Tabs defaultActiveKey={'find'} transition className="m-3">
                <Tab eventKey={'find'} title="Tra cứu điểm">
                    <Search showStudentSelect showSubjectSelect />
                    <FormGroup as={Col}>
                        <FormLabel>Tra cứu</FormLabel>
                        <br />
                        <ButtonBootstrap variant="primary" type="submit">
                            Tra cứu
                        </ButtonBootstrap>
                        <ButtonBootstrap variant="primary" type="submit" className="ms-1" disabled={!valueFetch}>
                            Xuất excel
                        </ButtonBootstrap>
                    </FormGroup>
                    <Table striped hover className="text-center">
                        <col />
                        <colgroup span="2"></colgroup>
                        <colgroup span="2"></colgroup>
                        <thead>
                            <tr>
                                <th colSpan="12" scope="colgroup">
                                    Học viên
                                </th>
                                <td colSpan="5">Môn ATCSDL</td>
                                <td colSpan="5">Môn ATCSDL</td>
                                <td colSpan="5">Môn ATCSDL</td>
                            </tr>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Mã học viên</th>
                                <th scope="col">Họ đệm</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Ngày sinh</th>
                                <th scope="col">Tổng TC</th>
                                <th scope="col">Số TCTB</th>
                                <th scope="col">STCTLN</th>
                                <th scope="col">DTBC</th>
                                <th scope="col">DCTB(10)</th>
                                <th scope="col">Số môn KD</th>
                                <th scope="col">Số TC KD</th>
                                <th scope="col">TP1</th>
                                <th scope="col">TP2</th>
                                <th scope="col">THI</th>
                                <th scope="col">TKHP</th>
                                <th scope="col">Chữ</th>
                                <th scope="col">TP1</th>
                                <th scope="col">TP2</th>
                                <th scope="col">THI</th>
                                <th scope="col">TKHP</th>
                                <th scope="col">Chữ</th>
                                <th scope="col">TP1</th>
                                <th scope="col">TP2</th>
                                <th scope="col">THI</th>
                                <th scope="col">TKHP</th>
                                <th scope="col">Chữ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>AT150121</td>
                                <td>Nguyễn Minh</td>
                                <td>Hoàng</td>
                                <td>AT15A</td>
                                <td>9</td>
                                <td>9</td>
                                <td>3</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey={'import'} title="Import file excel">
                    <Search showStudentSelect showSubjectSelect />
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
                    {showExcel && (
                        <>
                            <Title title="Preview" />
                            <Table striped hover bordered className="text-center">
                                <col />
                                <colgroup span="2"></colgroup>
                                <colgroup span="2"></colgroup>
                                <thead>
                                    <tr>
                                        {excelHeaderValue[0].map((item, index) => (
                                            <>
                                                {index === 0 ? (
                                                    <th colSpan="12" scope="colgroup" key={index}>
                                                        {item}
                                                    </th>
                                                ) : (
                                                    <th colSpan="5" key={index}>
                                                        {item}
                                                    </th>
                                                )}
                                            </>
                                        ))}
                                    </tr>
                                    <tr>
                                        {excelHeaderValue[1].map((item, index) => (
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
                                                <th key={index}>{item}</th>
                                            ))}
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

export default FindGrade;
