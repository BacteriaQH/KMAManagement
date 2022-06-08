import { useState } from 'react';
import * as xlsx from 'xlsx';

const ReadExcel = (file) => {
    const [data1, setData1] = useState([]);

    const reader = new FileReader();
    let arr;
    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = xlsx.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = xlsx.utils.sheet_to_json(ws, { header: 1 });
        data.splice(0, 3);
        const header = data.splice(0, 1);
        arr.push(header);
        arr.push(data);
        setData1(arr);
        // console.log(header);
        // console.log(data);
    };
    reader.readAsBinaryString(file);
    console.log(arr);
    return data1;
};

export default ReadExcel;
