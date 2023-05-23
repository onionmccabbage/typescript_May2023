// we will consume data from https://jsonplaceholder.typicode.com/photos
import {fetchPhotos, Photo} from './promises.js'

{
    // make use of our function
    // Promises are 'thenable'
    fetchPhotos()// this method will return a Promise
        // we expect to receive an array containing Photo object
        .then( (d:Array<Photo> | string)=>{
            // see if we can grab a bit of the structure
            // we can use type guards to se if we have a string or...
            if(typeof(d)=='string'){
                console.log(d)
            }
            else {
                console.log(d[0].title)
                // console.log(d)
                // grab the 'content' DOM entity
                const c = document.getElementById('content')
                // populate it with some returned data
                c.innerHTML = d[0]['title'] // or .title
                // populate hte img src with our returned thumbnail
                const i = document.getElementById('thumbnail')
                i.setAttribute('src', d[0]['thumbnailUrl'])
                i.setAttribute('alt', d[0]['title'])
                i.setAttribute('title', d[0]['title'])
            } // end of else
        } ) // end of 'then'
        .catch( (err)=>{ // catch any exception
            console.log(err)
        } ) 
}
// export {} // this makes the current file into a 'module'