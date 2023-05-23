// we will consume data from https://jsonplaceholder.typicode.com/photos

// we could import this from a module
interface Photo { // interface is the prefered way to declare types
    id           : number
    title        : string
    url          : string
    albumId      : number
    thumbnailUrl : string
}
{
    // a function to get remote data (or else an error message)
    const fetchPhotos = async ():Promise< Array<Photo> | string >  =>{ // fetch will return a promise
        // use fetch to asynchronously get the data
        // const API = `https://jsonplaceholder.typicode.com/photos`
        const API = `https://nonsuch.ie`
        try {
            // 'fetch' is part of ES6+ only works in a browser
            const response = await fetch(API) // by default this is a 'get' request
            // we need just the data (which in this case is JSON)
            return response.json() // this is the Promise, containing our data
        }
        catch (err) { // code for errors before writing the main try block
            return err.message // should we throw an exception...?
        }
        finally {
            // if there is no exception or if there is an exception the finally block always runs
        }
    }

    // make use of our function
    // Promises are 'thenable'
    fetchPhotos()// this method will return a Promise
        // we expect to receive an array containing Photo object
        .then( (d:Array<Photo> | string)=>{
            console.log(d)
        } )
        .catch( (err)=>{ // catch any exception
            console.log(err)
        } ) 


}