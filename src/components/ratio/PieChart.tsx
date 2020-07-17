import React, { useEffect } from 'react';
import Chartist from 'chartist';

interface ListProps {
  list: any[];
};

function PieChart(props: ListProps) {
  useEffect(() => {
    new Chartist.Pie('.ct-chart', {
      series: props.list,
    });
  });

  return (
    <div className="ct-chart ct-perfect-fourth"></div>
  );
}

export default PieChart;
