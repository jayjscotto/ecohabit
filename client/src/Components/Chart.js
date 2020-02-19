import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  const [chartInfo, setChartInfo] = useState({});

  useEffect(
    () => {
      setChartInfo({
        labels: props.dates,
        datasets: [{
          label: 'Ecohabits Daily Score',
          data: props.chartdata,
          backgroundColor: [
              'rgba(93, 103, 91, 0.2)'
          ],
          borderColor: [
              'rgba(241, 187, 135, 1)'
          ],
          borderWidth: 2,
        }]
      })
    },
    []
  )

  return (
    <Line
    data={chartInfo}
    width={100}
    height={35}
    options={{ 
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                min: 0,
                max: 5,
                stepSize: 1
            },
            
          }]
        }
      // maintainAspectRatio: true 
    }}
    />
  )

}

export default LineChart;