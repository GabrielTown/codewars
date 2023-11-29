// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6


console.log(digitalRoot(631900))

function digitalRoot(n) {
    return (n > 9) ? digitalRoot((''+n).split('').reduce((a, c) => parseInt(a) + parseInt(c))) : n
}

