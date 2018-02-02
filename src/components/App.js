import React from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';

import calculator from '../calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  updateResults = inputData =>
    this.setState({ results: calculator(inputData) });

  render = () => (
    <div>
      <Form updateResults={this.updateResults} />
      <Results data={this.state.results} />
    </div>
  );
}

export default App;
