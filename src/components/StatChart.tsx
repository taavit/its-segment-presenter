/**
 * Draw chart for given segment
 */
import { ChartData, ChartOptions } from 'chart.js';
import * as React from 'react';
import { Line } from 'react-chartjs-2';

import { IMeasurement } from '../model/IMeasurement';

/**
 * Presents stats for segment
 */
export interface IStatChartsProps {
    points: IMeasurement[];
    label: string;
}

// tslint:disable-next-line:variable-name
export const StatChart: React.StatelessComponent<IStatChartsProps> = ({ label, points }) => {
    const data: ChartData = {
        datasets: [
            {
                label: 'Średnia liczba pojazdów',
                pointRadius: 0,
                fill: false,
                borderColor: '#3FB770',
                data: points.map((point) => ({
                    y: point.avg_car_per_hour,
                    t: new Date(point.date_of_measurement)
                }))
            },
            {
                label: 'Średnia prędkość',
                fill: false,
                pointRadius: 0,
                borderColor: '#FEB058',
                data: points.map((point) => ({
                    y: point.avg_speed,
                    t: new Date(point.date_of_measurement)
                }))
            },
            {
                label: 'Średni czas przejazdu',
                fill: false,
                pointRadius: 0,
                borderColor: '#4B59AE',
                data: points.map((point) => ({
                    y: point.avg_time,
                    t: new Date(point.date_of_measurement)
                }))
            }
        ]
    };

    const options: ChartOptions = {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }
    };

    return (
        <div style={{flex: 1}}>
            <Line
                data={ data }
                options={options}
            />
        </div>
    );
};
