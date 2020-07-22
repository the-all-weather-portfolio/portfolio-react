import React, { useEffect } from 'react';
import Chartist from 'chartist';

interface Props {
  list: any[];
}

function PieChart(props: Props) {
  useEffect(() => {
    new Chartist.Pie('.ct-chart', {
      series: props.list,
    });
  }, [props.list]);

  return (
    <div className="ct-chart ct-perfect-fourth"></div>
  );
}

export default PieChart;
