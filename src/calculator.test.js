import calculator from './calculator';

it('increases age1', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 5000,
    age2: 50,
    retirementAge2: 65,
    contribution2: 5000,
    savings: 50000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].age1).toEqual(61);
  expect(results[1].age1).toEqual(62);
  expect(results[2].age1).toEqual(63);
});

it('increases age2', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 5000,
    age2: 50,
    retirementAge2: 65,
    contribution2: 5000,
    savings: 50000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].age2).toEqual(51);
  expect(results[1].age2).toEqual(52);
  expect(results[2].age2).toEqual(53);
});

it('does not appreciate when 0 returnRate', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 0,
    age2: 50,
    retirementAge2: 65,
    contribution2: 0,
    savings: 50000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(50000);
  expect(results[0].appreciation).toEqual(0);
  expect(results[1].balance).toEqual(50000);
  expect(results[1].appreciation).toEqual(0);
});

it('appreciates when there is a returnRate of 10%', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 0,
    age2: 50,
    retirementAge2: 65,
    contribution2: 0,
    savings: 50000,
    returnRate: 0.1
  };
  const results = calculator(data);
  expect(results[0].appreciation).toEqual(5000);
  expect(results[0].balance).toEqual(55000);
  expect(results[1].appreciation).toEqual(5500);
  expect(results[1].balance).toEqual(60500);
});

it('appreciates when there is a returnRate of 7%', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 0,
    age2: 50,
    retirementAge2: 65,
    contribution2: 0,
    savings: 100000,
    returnRate: 0.07
  };
  const results = calculator(data);
  expect(results[0].appreciation).toEqual(7000);
  expect(results[0].balance).toEqual(107000);
  expect(results[1].appreciation).toEqual(7490);
  expect(results[1].balance).toEqual(114490);
});

it('adds contributions', () => {
  const data = {
    age1: 60,
    retirementAge1: 65,
    contribution1: 33,
    age2: 50,
    retirementAge2: 65,
    contribution2: 11,
    savings: 0,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(44);
  expect(results[1].balance).toEqual(88);
  expect(results[2].balance).toEqual(132);
});

it('stops adding contributions at retirement age for person1', () => {
  const data = {
    age1: 63,
    retirementAge1: 65,
    contribution1: 33,
    age2: 50,
    retirementAge2: 65,
    contribution2: 0,
    savings: 0,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(33);
  expect(results[1].balance).toEqual(66);
  expect(results[2].balance).toEqual(66);
  expect(results[3].balance).toEqual(66);
});

it('stops adding contributions at retirement age for person2', () => {
  const data = {
    age1: 50,
    retirementAge1: 65,
    contribution1: 0,
    age2: 63,
    retirementAge2: 65,
    contribution2: 33,
    savings: 0,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(33);
  expect(results[1].balance).toEqual(66);
  expect(results[2].balance).toEqual(66);
  expect(results[3].balance).toEqual(66);
});

it('adds contributions and appreciation', () => {
  const data = {
    age1: 50,
    retirementAge1: 65,
    contribution1: 4000,
    age2: 50,
    retirementAge2: 65,
    contribution2: 6000,
    savings: 0,
    returnRate: 0.1
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(10000); // don't calculate appreciaton on the first year
  expect(results[1].balance).toEqual(21000);
  expect(results[2].balance).toEqual(33100);
});
