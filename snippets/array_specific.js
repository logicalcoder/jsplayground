// Ensure Array Values
function filledArray(amount = 5) {
  return Array(amount).fill('');
}
console.log('filledArray :', filledArray());

// return unique array
function uniqueArray(arr = ['Mazda', 'Ford', 'Renault', 'Opel', 'Mazda']) {
  const uniqueWithArrayFrom = Array.from(new Set(arr));
  console.log('With Array From :', uniqueWithArrayFrom);

  const uniqueWithSpreadOperator = [...new Set(arr)];
  console.log('With Spread Operator :', uniqueWithSpreadOperator);
}
uniqueArray();

// merge array of objects using spread
function mergeSample() {
  const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
  ];

  const result = cities.reduce((accumulator, item) => {
    return {
      ...accumulator,
      [item.name]: item.visited
    }
  }, {});

  console.log(result);
}

// map the array (without the Array.map)
function mapArray() {
  const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
  ];

  const cityNames = Array.from(cities, ({name}) => name);
  console.log(cityNames);
}
mapArray();