import React from 'react';
import RatioTable from '../components/ratio/RatioTable';
import PieChart from '../components/ratio/PieChart';

function Ratio() {
  return (
    <div className="container">
      <h3>Ratio</h3>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <RatioTable/>
        </div>
        <div className="col">
          <PieChart/>
        </div>
      </div>
    </div>
  );
}

export default Ratio;
