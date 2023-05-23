// generators are available in ES6+
// generators are the one time you MUST use 'function' keyword

function* fibon(){ // the asterisk makes the function into a generator
    let first=1, second=2
    // here is an endless loop
    for (let i=0; i<Number.POSITIVE_INFINITY; i++) {
        let sum = first + second
        yield sum // we can yield any useful values
        first = second
        second = sum
    }
}

// it is common to use SJON to read our generated values
const prettyPrint = (item:IteratorResult<number>)=>{
    return JSON.stringify(item)
}

// use the generator: first we make an instance of our generator
const g = fibon() // we now have a generator instance
console.log( prettyPrint(  g.next() ) ) // 3
console.log( g.next() ) // 5
console.log( g.next().value ) // 8