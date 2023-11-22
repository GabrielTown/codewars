let names = ['Peter', 'Fred', 'Tank']

function likes(names) {
    let length = names.length
    
    let likes = (length > 3) ? `${names[0]}, ${names[1]} and ${length - 2} others like this`
        : (length > 2) ? `${names[0]}, ${names[1]} and ${names[2]} like this` 
        : (length > 1) ? `${names[0]} and ${names[1]} like this` 
        : (length > 0) ? `${names[0]} likes this` : 'no one likes this'

    return likes
}

