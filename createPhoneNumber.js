// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// for (const key in user) {

//     console.log(`${key}: ${user[key]}`);
// }

function createPhoneNumber(numbers){
    let splice = {
        0: '(',
        4: ') ',
        8: '-'
    }

    for (const position in splice) {
        numbers.splice(position, 0, splice[position])
    }
    return numbers.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// solutiion from codewars
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }
  