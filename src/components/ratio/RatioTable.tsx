import React from 'react';

interface Props {
  list: any[];
}

function RatioTable(props: Props) {
  const row = props.list.map(item => (
    <tr>
      <td>{item.stock}</td>
      <td className="text-right">{item.price.toLocaleString('kr-KO')}</td>
      <td className="text-right">{item.quantity.toLocaleString('kr-KO')}</td>
      <td className="text-right">{item.value.toLocaleString('kr-KO')}</td>
      <td className="text-right">{item.ratio.toFixed(2)}%</td>
    </tr>
  ));
  return (
    <table className="table">
      <thead>
        <tr>
          <th>종목</th>
          <th className="text-right">가격</th>
          <th className="text-right">수량</th>
          <th className="text-right">합계</th>
          <th className="text-right">비율</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  );
}

export default RatioTable;
