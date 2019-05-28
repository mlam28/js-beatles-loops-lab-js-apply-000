var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++ ) {
    emptyArray.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
  }
  return emptyArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  var i = 0
  var newFacts = []
  while (facts.length > i) {
    newFacts.push(`${facts[i]} !!!`); i++
  }
  return newFacts
}
