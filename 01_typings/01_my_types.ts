{
    // curly brackets indicate a block of code - a scope
    let a = 1 // here we implicitly set a number
    let b:number = 2 // explicitly say it is a number
    let c:boolean // if we don't asign then it's a good idea to data-type here
    c = true
    // a = true // nope!
    // c = 'hello'
    // TYPESCRIPT IS DEVELOPMENT TIME ONLY - IT DOES NOT SURVIVE TO RUNTIME
    // Before code runs, all the typescript is transpiled to JavaScript

    // Remember EVERYTHING in JavaScript inherits from object
}
{ // we are in a different scope
    let a = 'ok' // infer a string - immutable
    a = 'another string'
    // a[0] = 'O' // nope!!
    const b = 'immutable constant'
    // b = 'changed' // nope!!
    let c:any = 1 // post-colon data type of 'any'
    c='ok'
}
{
    // ES offers dynamic types for: string, boolean, number, array, object, null
    // TS adds types for tuple, dictionary, enum
    // One advantage of TS is we can declare our OWN types
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista'
    // later on we can say
    let k:Kingdom = 'Bacteria'
    // k = 'oops' // nope!!
    type Arbitrary = 'literaly this' | 10 | false | Kingdom // any mix of any types
    let r:Arbitrary = 10 // or false or any of the permitted values

}
{
    // using enumeration with enum (indexed from zero)
    enum BoxSize { Small, Medium }
    
    // but JS does NOT look ahead
    enum BoxSize { Large=2, XLarge}
    
    let c = BoxSize.XLarge // TS looks ahead
   
    // remember there is only a JavaScript console within a browser!!
    // here we are running code OUTSIDE of a browser
    console.log(c) // 3

}
{
    // Data types and functions
    type allowed  = number | string

    // ehre we DO explicitly data-type the return and the argumetn types - TS cannot infer
    const fn = (x:allowed):string=>{
        // This function will take a number or a string and return a nubmer
        return `${x}` // modern JS string interpolation syntax
    }
    let n=4
    let o = '4'
    let s = fn(n) // function is allowed to accept number
    let t = fn(o) // .. also accept a string
    console.log(s, typeof(s), t)

    type my_type = boolean | number | string
    const fnB = ():my_type=>{
        // return 3
        // return false
        // return null
        return Number.NaN  // JS has useful values
        // return "Error!!!"
    }

    console.log(  fnB()  )
}
// Typescript does two things
// - make code data-type-safe during development
// - code-hinting (TS language engine)
{
    // optional arguments (JS feature)
    const fnD = (opt?:any):void=>{ // void is TS
        // we said we would return void, i.e. no return or explicitly return void
        // return never  // what is this ??
        return opt
    }
    console.log( fnD('is it lunch yet?') )
}
{
    // tuple (mainly used to data-type-safe arrays, but can apply to any structure)
    // declare types that MUST occur in a SPECIFIC order
    let poem:[number, boolean, string]
    poem = [1, true, 'love'] // just an array
    console.log(poem, poem[2])
}

// the smallest significant margin of error
let n = Number.EPSILON
