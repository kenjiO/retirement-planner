import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age1: '60',
      retirementAge1: '65',
      contribution1: '6000',
      age2: '50',
      retirementAge2: '65',
      contribution2: '4000',
      savings: '100000',
      returnRate: '10'
    };
  }

  componentDidMount = () => this.updateResults();

  onChange = e =>
    this.setState({ [e.target.name]: e.target.value }, this.updateResults);

  updateResults = () => {
    const fields = {
      age1: parseInt(this.state.age1, 10),
      age2: parseInt(this.state.age2, 10),
      retirementAge1: parseInt(this.state.retirementAge1, 10),
      retirementAge2: parseInt(this.state.retirementAge2, 10),
      contribution1: parseInt(this.state.contribution1, 10),
      contribution2: parseInt(this.state.contribution2, 10),
      savings: parseInt(this.state.savings, 10),
      returnRate: parseFloat(this.state.returnRate, 10) / 100
    };
    this.props.updateResults(fields);
  };

  render = () => (
    <div>
      <div>
        Age1
        <input
          className="numberInput"
          name="age1"
          type="text"
          onChange={this.onChange}
          value={this.state.age1}
        />
        Retirement Age
        <input
          className="numberInput"
          name="retirementAge1"
          type="text"
          onChange={this.onChange}
          value={this.state.retirementAge1}
        />
        Yearly Contribution
        <input
          className="numberInput"
          name="contribution1"
          type="text"
          onChange={this.onChange}
          value={this.state.contribution1}
        />
      </div>
      <div>
        Age2
        <input
          className="numberInput"
          name="age2"
          type="text"
          onChange={this.onChange}
          value={this.state.age2}
        />
        Retirement Age
        <input
          className="numberInput"
          name="retirementAge2"
          type="text"
          onChange={this.onChange}
          value={this.state.retirementAge2}
        />
        Yearly Contribution
        <input
          className="numberInput"
          name="contribution2"
          type="text"
          onChange={this.onChange}
          value={this.state.contribution2}
        />
      </div>
      <div>
        Savings
        <input
          className="numberInput"
          name="savings"
          type="text"
          onChange={this.onChange}
          value={this.state.savings}
        />
        Investment Return %
        <input
          className="numberInput"
          name="returnRate"
          type="text"
          onChange={this.onChange}
          value={this.state.returnRate}
        />
      </div>
    </div>
  );
}

Form.propTypes = {
  updateResults: PropTypes.func.isRequired
};

export default Form;
