import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RatioTable from '../../components/ratio/RatioTable';
import PieChart from '../../components/ratio/PieChart';

import {
  // selectList,
  // selectStatus,
  requestAsync,
} from './ratioSlice';

function Ratio() {
  const list = useSelector((state: any) => state.ratio.list);
  const status = useSelector((state: any) => state.ratio.status);
  const dispatch = useDispatch();

  const renderedCard = list.map((item: any) => (
    <div>
      <h5>{item.name}</h5>
      <p>{item.value}</p>
    </div>
  ))

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
      <div>
        <h6>{status}</h6>
        <p>{renderedCard}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(requestAsync())}
        >Request</button>
      </div>
    </div>
  );
}

export default Ratio;
