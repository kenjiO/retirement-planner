import calculator from './calculator';

it('The first row should be the initial data', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 50000,
    contribution: 5000,
    returnRate: 0.1
  };
  const results = calculator(data);
  expect(results[0].age).toEqual(60);
  expect(results[0].balance).toEqual(50000);
  expect(results[0].appreciation).toEqual(0);
});

it('increases age', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 50000,
    contribution: 5000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].age).toEqual(60);
  expect(results[1].age).toEqual(61);
  expect(results[2].age).toEqual(62);
});

it('does not appreciate when 0 returnRate', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 50000,
    contribution: 0,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0]).toMatchObject({ appreciation: 0, balance: 50000 });
  expect(results[1]).toMatchObject({ appreciation: 0, balance: 50000 });
  expect(results[2]).toMatchObject({ appreciation: 0, balance: 50000 });
});

it('appreciates when there is a returnRate of 10%', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 50000,
    contribution: 0,
    returnRate: 0.1
  };
  const results = calculator(data);
  expect(results[0]).toMatchObject({ appreciation: 0, balance: 50000 });
  expect(results[1]).toMatchObject({ appreciation: 5000, balance: 55000 });
  expect(results[2]).toMatchObject({ appreciation: 5500, balance: 60500 });
  expect(results[3]).toMatchObject({ appreciation: 6050, balance: 66550 });
});

it('appreciates when there is a returnRate of 7%', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 100000,
    contribution: 0,
    returnRate: 0.07
  };
  const results = calculator(data);
  expect(results[0]).toMatchObject({ appreciation: 0, balance: 100000 });
  expect(results[1]).toMatchObject({ appreciation: 7000, balance: 107000 });
  expect(results[2]).toMatchObject({ appreciation: 7490, balance: 114490 });
  expect(results[3]).toMatchObject({ appreciation: 8014, balance: 122504 });
});

it('adds contributions', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 50000,
    contribution: 5000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(50000);
  expect(results[1].balance).toEqual(55000);
  expect(results[2].balance).toEqual(60000);
});

it('stops adding contributions at retirement age', () => {
  const data = {
    age: 63,
    retirementAge: 65,
    savings: 50000,
    contribution: 5000,
    returnRate: 0
  };
  const results = calculator(data);
  expect(results[0]).toMatchObject({ age: 63, balance: 50000 });
  expect(results[1]).toMatchObject({ age: 64, balance: 55000 });
  expect(results[2]).toMatchObject({ age: 65, balance: 60000 });
  expect(results[3]).toMatchObject({ age: 66, balance: 60000 });
  expect(results[4]).toMatchObject({ age: 67, balance: 60000 });
  expect(results[5]).toMatchObject({ age: 68, balance: 60000 });
});

it('adds contributions and appreciation', () => {
  const data = {
    age: 60,
    retirementAge: 65,
    savings: 100000,
    contribution: 10000,
    returnRate: 0.1
  };
  const results = calculator(data);
  expect(results[0].balance).toEqual(100000);
  expect(results[1].balance).toEqual(100000 + 100000 * 0.1 + 10000);
  expect(results[2].balance).toEqual(120000 + 120000 * 0.1 + 10000);
  expect(results[3].balance).toEqual(142000 + 142000 * 0.1 + 10000);
});
