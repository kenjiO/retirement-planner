import _ from 'lodash';
const LIFE_EXPECTANCY = 100;

const calculateNextYear = (previousYear, parameters) => {
  const age1 = previousYear.age1 + 1;
  const age2 = previousYear.age2 + 1;
  const contribution1 =
    age1 <= parameters.retirementAge1 ? parameters.contribution1 : 0;
  const contribution2 =
    age2 <= parameters.retirementAge2 ? parameters.contribution2 : 0;

  const appreciation = _.round(previousYear.balance * parameters.returnRate);

  const currentYear = {
    age1,
    age2,
    contribution1,
    contribution2,
    appreciation,
    balance: previousYear.balance + appreciation + contribution1 + contribution2
  };

  return currentYear;
};

const calculator = parameters => {
  const results = [];
  const yearsToRunSimulation =
    LIFE_EXPECTANCY - Math.min(parameters.age1, parameters.age2);

  _.times(yearsToRunSimulation, () => {
    const previousYear = _.last(results) || {
      age1: parameters.age1,
      age2: parameters.age2,
      balance: parameters.savings
    };
    const currentYear = calculateNextYear(previousYear, parameters);
    results.push(currentYear);
  });

  return results;
};

export default calculator;
