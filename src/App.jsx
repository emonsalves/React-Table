import { useState } from 'react';
import './App.css';
import BasicTable from './components/tables/BasicTable';
import Fetch from './helpers/fetchs.js';

function App() {
    const url = 'https://641447dd727d1c0df00622d2.mockapi.io/api/v1/users';
    const [data, setData] = useState([]);

    const handlerClick = async () => {
        const data = await Fetch.getData({ url });
        setData(data);
    };

    return (
        <>
            <h1>React Table</h1>
            <button onClick={handlerClick}>Fetch Data</button>
            {data.length > 0 && <BasicTable data={data} />}
        </>
    );
}

export default App;
