import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData( await fetchDailyData())
        }
        console.log('dd', dailyData)
        fetchApi();
    }, [dailyData])

    const lineChart = (
        dailyData[0] 
        ? (<Line 
            data={{
            labels: '',
            datasets:[{}, {}]
        }}/>
        ) : null
    );
    return (
        <h1>Chart</h1>
    )
}

export default Chart;