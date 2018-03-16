import React from 'react';
import PropTypes from 'prop-types';

const renderTableRows = results =>
  results.map((yearData, index) => (
    <tr key={index}>
      <td>{yearData.year}</td>
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
    <table id="resultsTable">
      <thead>
        <tr>
          <th>Year</th>
          <th>Age</th>
          <th>Contribution</th>
          <th>Age</th>
          <th>Contribution</th>
          <th>Appreciation</th>
          <th>Balance</th>
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
