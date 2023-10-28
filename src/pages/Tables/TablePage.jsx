import { useState } from 'react';
import BasicTable from '../../components/tables/BasicTable';
import Fetch from '../../helpers/fetchs';

const TablePage = () => {
    const url = 'https://641447dd727d1c0df00622d2.mockapi.io/api/v1/users';
    const [data, setData] = useState([]);

    const handlerGetData = async () => {
        const data = await Fetch.getData({ url });
        setData(data);
    };

    const handlerClearData = () => {
        setData([]);
    };

    return (
        <>
            <h1>React Table</h1>
            <button onClick={handlerGetData}>Fetch Data</button>
            <button onClick={handlerClearData}>Clear Data</button>
            {data.length > 0 ? <BasicTable data={data} /> : <h2>No Data</h2>}
        </>
    );
};
export default TablePage;
