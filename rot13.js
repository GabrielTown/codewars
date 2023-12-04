// DESCRIPTION:
// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

console.log(rot13("This is my first ROT13"))


function rot13(str) {
    let abc = [ 
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'
    ]

    return str.split('').map(x => {

        let index = abc.indexOf(x.toLowerCase())

        if (index === -1) {
            return x
        } else {
            let capitolized = x.toLowerCase() === x ? false : true
            let nop = index >= 13 ? abc[index - 13] : abc[index + 13]
            return capitolized ? nop.toUpperCase() : nop
        }
    }).join('')
}