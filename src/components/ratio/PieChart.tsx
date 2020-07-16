import React from 'react';
import Chartist from 'chartist';

interface ListProps {
  list: any[];
};

class PieChart extends React.Component<ListProps> {
  render() {
    return (
      <div className="ct-chart ct-perfect-fourth"></div>
    );
  }
  componentDidUpdate() {
    console.log('componentDidMount');
    this.renderChart();
  }
  renderChart() {
    console.log('renderChart');
    const data = {
      series: this.props.list,
    };
    new Chartist.Pie('.ct-chart', data);
  }
}

export default PieChart;
