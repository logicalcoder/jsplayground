//  easy mode: filter, map, and sum

var sampleData = [
  {
    "term": "doing the bear",
    "found": true,
    "popularity": 108
  },
  {
      term: 'katterzem',
      found: false,
      popularity: null,
  },
  {
      term: 'bone shaker',
      found: true,
      popularity: 609,
  },
  {
      term: 'smothering a parrot',
      found: false,
      popularity: null,
  },
  {
      term: 'damfino',
      found: true,
      popularity: 232,
  },
  {
      term: 'rain napper',
      found: false,
      popularity: null,
  },
  {
      term: 'donkey’s breakfast',
      found: true,
      popularity: 787,
  },
  {
      term: 'rational costume',
      found: true,
      popularity: 513,
  },
  {
      term: 'mind the grease',
      found: true,
      popularity: 154,
  }
]

function isFound(item) {
  return item.found;
}

function getPopularity(item) {
  return item.popularity;
}

function addScores(runningTotal, popularity) {
  return runningTotal + popularity;
}

// Filter out terms that weren't found in books
const foundSlangTerms = sampleData.filter(isFound);

// Extract the popularity scores so we just have an array of numbers
const popularityScores = foundSlangTerms.map(getPopularity);

// Add up all the scores total. 
// Note the secons param tells to start the total at zero
const scoresTotal = popularityScores.reduce(addScores, 0);

// Calculate the average and display
const averagePopularity = scoresTotal / popularityScores.length;
console.log('Average popularity :', averagePopularity);