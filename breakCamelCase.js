let sample = "letterjam"


function solution(string) {
    return string.split('').map(letter => letter === letter.toUpperCase() ? ' ' + letter : letter).join('')
}

console.log(solution(sample))