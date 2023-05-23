// how to write a function - let me count the ways

const fnB = x => x*x // no braces, no 'return'
const fnC = x => { return x*x } // if we use braces, we MUST say 'return' (if we want a return)
const fnD = (x, y)=>x*y // if there are zero or more than one arguments, we must use brackets
const fnE = ()=> 'zero params' // or {return 'zero params'}
const fnF = (x)=>{return x*x}

// what about functions in classes
class Demo {
    someMethod(){
        // do stuff here
    }
    otherMethod = ()=>{}
}

// we try to avoid the use of 'function' keyword
