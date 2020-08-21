/*
	Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

	HH = hours, padded to 2 digits, range: 00 - 99
	MM = minutes, padded to 2 digits, range: 00 - 59
	SS = seconds, padded to 2 digits, range: 00 - 59
	The maximum time never exceeds 359999 (99:59:59)
	You can find some examples in the test fixtures.
*/


function humanReadable(seconds) {
	const hr = seconds>359999 ? 99 : Math.floor(seconds/3600);
	const min = hr>0 ? Math.floor((seconds%3600)/60) : Math.floor(seconds/60);
	const sec = hr>0 ? (seconds%3600)%60 : min>0 ? seconds%60 : seconds;
	let newhr = ("0" + hr).slice(-2);
	let newmin = ("0" + min).slice(-2);
	let newsec = ("0" + sec).slice(-2);
	let answer = newhr + ":" + newmin + ":" + newsec;
	return answer;
}