//  easy mode ii: multiple accumulator values

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

// Use an object to keep track of multiple values in a single return value
function addScores({totalPopularity, itemCount}, popularity) {
  return {
    totalPopularity: totalPopularity + popularity,
    itemCount: itemCount + 1
  };
}

const initialInfo = {
  totalPopularity: 0,
  itemCount: 0
};

const popularityInfo = sampleData.filter(isFound)
    .map(getPopularity)
    .reduce(addScores, initialInfo);

const {totalPopularity, itemCount} = popularityInfo;
const averagePopularity = totalPopularity / itemCount;
console.log('Average popularity :', averagePopularity);