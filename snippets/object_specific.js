// merge objects using spread
function mergeObjects() {
  // merging objects
  const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
  const manufacturer = { name: 'Company Name', address: 'The Company Address' }

  const productManufacturer = { ...product, ...manufacturer };
  console.log(productManufacturer);
}
mergeObjects();

// Conditional Object Properties / Elements
const getUser = (emailIncluded) => {
  return {
    name: 'John',
    surname: 'Doe',
    ...emailIncluded && {email: 'john@doe.com'}
  }
}
console.log('getUser :', getUser(true));
console.log('getUser :', getUser(false));

function destructObject(rawUser) {
  let user = {}, userDetails = {};
  ({ name: user.name, surname: user.surname, ...userDetails } = rawUser);

  console.log(user);
  console.log(userDetails);
}
const rawUser = {
  name: 'John',
  surname: 'Doe',
  email: 'john@doe.com',
  displayName: 'SuperCoolJohn',
  joined: '2016-05-05',
  image: 'path-to-the-image',
  followers: 45
}
destructObject(rawUser);