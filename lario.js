let arr = [1,6,7,3,4]

let min = Math.min(...arr)
let max = Math.max(...arr)

var newArr = []

for (let i = min; i < max + 1; i++) {
    newArr.push(i)
}

return newArr