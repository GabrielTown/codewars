// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
//let array = [ 10, 8, 12, 7, 6, 4, 10]//-->  12  4, 6, 7, 8, 10, 10, 12, 12, 12
//let array = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]         //-->  12
let array = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  //-->   3


function highestRank(arr){
    let sortedArr = arr.sort((a, b) => a-b)
    let maxDuplicates = 1

    return sortedArr.reduce((accumulator, currentValue) => {
        let currentDuplicates = sortedArr.filter(x => x === currentValue).length
        maxDuplicates = currentDuplicates >= maxDuplicates ? currentDuplicates : maxDuplicates

        return currentDuplicates >= maxDuplicates ? currentValue : accumulator
    })
}

console.log(highestRank(array))