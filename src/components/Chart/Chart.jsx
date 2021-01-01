import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData( await fetchDailyData())
        }
        fetchApi();
    }, [dailyData])

    const lineChart = (
        dailyData.length !== 0 
        ? (<Line 
            data={{
            labels: dailyData.map(({date}) => date),
            datasets:[{data: dailyData.map(({confirmed}) => confirmed), label: 'infected', borderColor: '#3333ff', fill:'true'},
                 {data: dailyData.map(({deaths}) => deaths), label: 'deaths', borderColor: 'red', backgroundColor:'rgba(255,0,0,0.5)' , fill:'true'}]
        }}/>
        ) : null
    );
    return (
        <div className="container">
            {lineChart}
        </div>
    )
}

export default Chart;
