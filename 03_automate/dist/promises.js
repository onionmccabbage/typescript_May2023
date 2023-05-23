// we may need to accecss API that returns OTHER arrays
// export const fetchPhotos = async ():Promise< Array<Photo> | string >  =>{ // fetch will return a promise
export const fetchPhotos = async () => {
    // use fetch to asynchronously get the data
    const API = `https://jsonplaceholder.typicode.com/photos`;
    // const API = `https://nonsuch.ie`
    try {
        // 'fetch' is part of ES6+ only works in a browser
        const response = await fetch(API); // by default this is a 'get' request
        // we need just the data (which in this case is JSON)
        return response.json(); // this is the Promise, containing our data
    }
    catch (err) { // code for errors before writing the main try block
        return err.message; // should we throw an exception...?
    }
    finally {
        // if there is no exception or if there is an exception the finally block always runs
        // typically use this to tidy up
    }
};
