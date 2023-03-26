const scores = [10,34,23,14,45,11,30,21]
// it returns a first element in the array that satisfy the condition
const newScores = scores.find(score => score>35)
console.log(newScores)