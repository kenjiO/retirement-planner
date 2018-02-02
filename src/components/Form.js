import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '60',
      retirementAge: '65',
      savings: '50000',
      contribution: '5000',
      returnRate: '0.1'
    };
  }

  componentDidMount = () => this.updateResults();

  onChange = e =>
    this.setState({ [e.target.name]: e.target.value }, this.updateResults);

  updateResults = () => {
    const fields = {
      age: parseInt(this.state.age, 10),
      retirementAge: parseInt(this.state.retirementAge, 10),
      savings: parseInt(this.state.savings, 10),
      contribution: parseInt(this.state.contribution, 10),
      returnRate: parseFloat(this.state.returnRate, 10)
    };
    this.props.updateResults(fields);
  };

  render = () => (
    <div>
      Age{' '}
      <input
        name="age"
        type="text"
        onChange={this.onChange}
        value={this.state.age}
      />
      Retirement Age{' '}
      <input
        name="retirementAge"
        type="text"
        onChange={this.onChange}
        value={this.state.retirementAge}
      />
      Savings{' '}
      <input
        name="savings"
        type="text"
        onChange={this.onChange}
        value={this.state.savings}
      />
      Yearly Contribution{' '}
      <input
        name="contribution"
        type="text"
        onChange={this.onChange}
        value={this.state.contribution}
      />
      Investment Return{' '}
      <input
        name="returnRate"
        type="text"
        onChange={this.onChange}
        value={this.state.returnRate}
      />
    </div>
  );
}

Form.propTypes = {
  updateResults: PropTypes.func.isRequired
};

export default Form;
