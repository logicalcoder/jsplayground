const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    location: 'Arizona',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Henk Johnson',
    age: 45,
    gender: 'male',
    lookingFor: 'female',
    location: 'Miami',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Melissa Foster',
    age: 34,
    gender: 'female',
    lookingFor: 'male',
    location: 'New York',
    image: 'https://randomuser.me/api/portraits/women/46.jpg'
  },
];

let profiles = profileIterator(data);

// Display first profile
nextProfile();

// Next Event
document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  
  if (currentProfile !== undefined) {
    document.querySelector('#profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;
  
    document.querySelector('#imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    // No more profiles
    profiles = profileIterator(data);
    nextProfile();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
        { value: profiles[nextIndex++], done: false } : 
        { done: true }
    }
  };
}

