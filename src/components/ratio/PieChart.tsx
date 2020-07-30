import React, { useEffect } from 'react';
import Chartist from 'chartist';

interface Props {
  list: any[];
}

function PieChart(props: Props) {
  useEffect(() => {
    function darwChart() {
      new Chartist.Pie('.ct-chart', {
        labels: props.list.map(item => item.stock),
        series: props.list,
      }, {
        labelInterpolationFnc: (value: any[]) => value
      });
    }

    darwChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ct-chart ct-perfect-fourth"></div>
  );
}

export default PieChart;
