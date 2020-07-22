import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestAsync,
  selectRatio,
  // selectList,
  // selectError,
  // selectStatus,
} from './ratioSlice';
import RatioTable from '../../components/ratio/RatioTable';
import PieChart from '../../components/ratio/PieChart';

function Ratio() {
  const { list, error, status } = useSelector(selectRatio);
  // const list = useSelector(selectList);
  // const error = useSelector(selectError);
  // const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h6>{status} {error?.message}</h6>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(requestAsync())}
        >Request</button>
      </div>
    </div>
  );
}

export default Ratio;
