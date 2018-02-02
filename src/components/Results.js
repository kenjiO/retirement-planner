import React from 'react';
import PropTypes from 'prop-types';

const renderData = results =>
  results.map((yearData, index) => (
    <div key={index}>{JSON.stringify(yearData)}</div>
  ));

const Results = props => <div>{renderData(props.data)}</div>;

Results.propTypes = {
  data: PropTypes.array
};

export default Results;
