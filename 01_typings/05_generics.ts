{
    // a common problem - we may not know beforehand exaclty what type is will be received

    // this function will rturn member zero from an array
    // we could use 'any'...
    const zeroethElement = (a:Array<any>):any=>{
        return a[0]
    }
    // implicitly TS spots this is an array of strings
    let a_s = ['this', 'is', 'an', 'array', 'of', 'strings']
    let a_n:Array<number> = [ 5, 3, 77, 2, 9 ]

    console.log( zeroethElement(a_s) )
    console.log( zeroethElement(a_n) )
}
{
    // solution is to use generics - by convention we use 'T' for our type
    // the 'T' is the type inside the array - even for tuple
    const zeroethElement = <T>(a:Array<T>):T=>{
    // const zeroethElement = <T>(a:T[]):T=>{ // identical in function
        return a[0]
    }
    let a_s = ['this', 'is', 'an', 'array', 'of', 'strings']
    let a_x = ['this', true, 'an', 99, 'of', 'strings'] // TS will infer 'any'
    let a_n:Array<number> = [ 5, 3, 77, 2, 9 ]


    console.log( zeroethElement(a_s) )
    console.log( zeroethElement(a_x) ) // works - return an 'any'
    console.log( zeroethElement(a_n) )

}