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