import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(requestAsync());
  }, []);

  return (
    <div className="container">
      <h3>Ratio</h3>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <RatioTable/>
        </div>
        <div className="col">
          <PieChart
            list={list}
          />
        </div>
      </div>
      <div>
        <h6>{status}</h6>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(requestAsync())}
        >Request</button>
      </div>
    </div>
  );
}

export default Ratio;
