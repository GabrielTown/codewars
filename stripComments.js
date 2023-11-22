let markers = ["#", "!"]
// console.log(markers.reduce((accumulator, currentValue) => accumulator + "|" + currentValue))

function solution(input, markers) {

    let splitLines = input.split(/\r?\n/);
    let markersString = markers.reduce((accumulator, currentValue) => `\\${accumulator}|\\${currentValue}`)
    let regex = new RegExp(markersString, "gm")
    let lines = []
    splitLines.forEach(line => lines.push(line.split(regex)[0].trimEnd()))
    return lines.join("\n")
  }


let string = "apples, pears # and bananas \ngrapes \nbananas !apples"

console.log(JSON.stringify(solution(string, markers)))