import React from 'react';
import Chartist from 'chartist';

class PieChart extends React.Component {
  render() {
    return (
      <div className="ct-chart ct-perfect-fourth"></div>
    );
  }
  componentDidMount() {
    var data = {
      series: [
        {
          value: 220,
          name: 'Series 1',
          meta: 'Meta One'
        },
        {
          value: 210,
          name: 'Series 2',
          meta: 'Meta Two'
        },
        {
          value: 105,
          name: 'Series 3',
          meta: 'Meta Three'
        },
        {
          value: 201,
          name: 'Series 4',
          meta: 'Meta Three'
        },
        {
          value: 230,
          name: 'Series 5',
          meta: 'Meta Three'
        },
        {
          value: 99,
          name: 'Series 6',
          meta: 'Meta Three'
        }
      ]
    };
    new Chartist.Pie('.ct-chart', data);
  }
}

export default PieChart;
