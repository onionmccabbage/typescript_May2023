// classes are part of modern JS
// the interface keyword is part of TS

// we need a type to represent aspects of a 'Photo' 
interface Photo { // interface is the prefered way to declare types
    id           : number
    title        : string
    url          : string
    albumId      : number
    thumbnailUrl : string
    ooblywoo?:object // optional
    prettyPrint? : ()=>{} // no return type - see the implementation
}

// we can then implement our interface in a class
class Snap implements Photo {
    id: number
    title: string // JS allows private members
    url: string
    albumId: number
    thumbnailUrl: string
    ooblywoo?: object
    // we can optionally declare a constructor
    // only ONE constructor in JS
    // constructor(id:number, title:string, url:string){ // we can pass individual parameters
    constructor(snap:Photo){ // only ONE constuctorr in JS
        this.id           = snap.id
        this.title        = snap.title
        this.url          = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
        this.albumId      = snap.albumId
    }
    // NB there are a couple of ways to declare a function in a class
    // prettyPrint = ():string => { // method as a property of the class
    prettyPrint ():string { // method just as a methgod of the class
        return `${this.title} ${this.url}`
    }
}

// since we have a constructor, TS lets us create isntances like this
let s1 = new Snap({'id':1, 'title':'cat', 'url':'https:bbc.ie', 'albumId':3 , 'thumbnailUrl':''})
    // s1.title = 'Here is a picture'
    // s1.url   = 'http://nonsuch.ie'
console.log( s1.prettyPrint() )

// we often need to deal with big data sets
// we can data-type our structures
// let photos:Array<Photo> = [
let photos:Photo[] = [ // both are identical in operation
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    }
]

let s2 = new Snap(photos[0])
let s3 = new Snap(photos[2])
console.log( s3.prettyPrint() )

