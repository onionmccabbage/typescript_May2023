// we will consume data from https://jsonplaceholder.typicode.com/photos
{
    // a function to get remote data (or else an error message)
    const fetchPhotos = async () => {
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
        }
    };
    // make use of our function
    // Promises are 'thenable'
    fetchPhotos() // this method will return a Promise
        // we expect to receive an array containing Photo object
        .then((d) => {
        // see if we can grab a bit of the structure
        console.log(d[0]['title']);
        // console.log(d)
        // grab the 'content' DOM entity
        const c = document.getElementById('content');
        // populate it with some returned data
        c.innerHTML = d[0]['title'];
        // populate hte img src with our returned thumbnail
        const i = document.getElementById('thumbnail');
        i.setAttribute('src', d[0]['thumbnailUrl']);
        i.setAttribute('alt', d[0]['title']);
        i.setAttribute('title', d[0]['title']);
    })
        .catch((err) => {
        console.log(err);
    });
}
