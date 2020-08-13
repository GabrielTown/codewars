/*
	Given an array of integers, find the one that appears an odd number of times.
	There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
	const count = A.reduce((tally, num) => {
		tally[num] = (tally[num] || 0) + 1;
		return tally;
	},{});
	return parseInt(Object.keys(count).filter(x => !(count[x]%2===0)));
}