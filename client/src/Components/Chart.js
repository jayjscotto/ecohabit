import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  state = {
    chartdata: {
        labels: ['Jan', 'Feb', 'March', 'April'],
        datasets: [{
            label: 'Ecohabits Daily Score',
            data: this.props.chartdata,
            backgroundColor: [
                'rgba(93, 103, 91, 0.2)'
            ],
            borderColor: [
                'rgba(241, 187, 135, 1)'
            ],
            borderWidth: 1
          }]
      }
  }

  render() {
    return (
      <Line
      data={this.state.chartdata}
      width={100}
      height={40}
      options={{ maintainAspectRatio: true }}
      />
    )
  }
}

export default LineChart;