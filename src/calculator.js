import _ from 'lodash';

const calculator = data => {
  const yearsToRunSimulation = 100 - data.age;

  const calculateNextYear = () => {
    const previousYear = _.last(results);
    const age = previousYear.age + 1;
    const appreciation = _.round(previousYear.balance * data.returnRate);
    const balance = getBalance(
      data.retirementAge,
      data.contribution,
      age,
      previousYear.balance,
      appreciation
    );

    const nextYear = {
      age,
      appreciation,
      contribution: data.contribution,
      balance
    };

    results.push(nextYear);
  };

  const results = [
    {
      age: data.age,
      balance: data.savings,
      appreciation: 0
    }
  ];

  _.times(yearsToRunSimulation, calculateNextYear);

  return results;
};

const getBalance = (
  retirementAge,
  contribution,
  age,
  balance,
  appreciation
) => {
  return age <= retirementAge
    ? balance + appreciation + contribution
    : balance + appreciation;
};

export default calculator;
