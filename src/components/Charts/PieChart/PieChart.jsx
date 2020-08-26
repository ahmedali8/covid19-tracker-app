import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';

import { GlobalContext } from '../../../context/GlobalState';

import styles from './PieChart.module.css';

const PieChart = () => {

    const { data: { confirmed, recovered, deaths } } = useContext(GlobalContext);
    console.log(confirmed, recovered, deaths)

    const pieChart = (
        confirmed ? (
            <Pie
                data={{
                    labels: [
                        'Infected',
                        'Recovered',
                        'Deaths'
                    ],
                    datasets: [{
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgba(255, 145, 0, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        hoverBackgroundColor: [
                            'rgba(255, 145, 0, 0.7)',
                            'rgba(0, 255, 0, 0.7)',
                            'rgba(255, 0, 0, 0.7)',
                        ]
                    }]
                }}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                        display: true,
                        labels: {
                            align: 'center',
                            position: 'left'
                        }
                    }
                }}
            />
        ) : null
    );


    return (
        <div className={styles.container}>
            {pieChart}
        </div>
    );
};

export default PieChart;
