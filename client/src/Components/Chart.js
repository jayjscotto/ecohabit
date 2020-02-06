import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  
  state = {
    chartdata: {
      labels: this.props.dates,
      datasets: [{
        label: 'Ecohabits Daily Score',
        data: this.props.chartdata,
        backgroundColor: [
            'rgba(93, 103, 91, 0.2)'
        ],
        borderColor: [
            'rgba(241, 187, 135, 1)'
        ],
        borderWidth: 2,
      }]
    }
  }

  render() {
    return (
      <Line
      data={this.state.chartdata}
      width={100}
      height={30}
      options={{ 

        // maintainAspectRatio: true 
      }}
      />
    )
  }
}

export default LineChart;