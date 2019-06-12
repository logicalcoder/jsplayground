// not using reduce at all (imperative loop)

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

let popularitySum = 0;
let itemsFound = 0;
let item = null;

for (let i = 0; i < sampleData.length; i++) {
  item = sampleData[i];
  if (item.found) {
    popularitySum += item.popularity;
    itemsFound = itemsFound + 1;
  }
}

const averagePopularity = popularitySum / itemsFound;
console.log('Average popularity :', averagePopularity);