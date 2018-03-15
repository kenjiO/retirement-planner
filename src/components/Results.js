import React from 'react';
import PropTypes from 'prop-types';

const renderTableRows = results =>
  results.map((yearData, index) => (
    <tr key={index}>
      <td>{yearData.age1}</td>
      <td>{yearData.contribution1}</td>
      <td>{yearData.age2}</td>
      <td>{yearData.contribution2}</td>
      <td>{yearData.appreciation}</td>
      <td>{yearData.balance}</td>
    </tr>
  ));

const Results = props => (
  <div>
    <table>
      <thead>
        <tr>
          <th>age1</th>
          <th>contribution1</th>
          <th>age2</th>
          <th>contribution2</th>
          <th>appreciation</th>
          <th>balance</th>
        </tr>
      </thead>
      <tbody>{renderTableRows(props.data)}</tbody>
    </table>
  </div>
);

Results.propTypes = {
  data: PropTypes.array
};

export default Results;
