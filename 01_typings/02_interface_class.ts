// classes are part of modern JS
// the interface keyword is part of TS

// we need a type to represent aspects of a 'Photo' 
interface Photo { // interface is the prefered way to declare types
    id    : number
    title : string
    url   : string
    ooblywoo?:object // optional
    prettyPrint? : ()=>{}
}

// we can then implement our interface in a class
class Snap implements Photo {
    id: number
    title: string // JS allows private members
    url: string
    // we can optionally declare a constructor
    constructor(snap:Photo){
        this.id    = snap.id
        this.title = snap.title
        this.url   = snap.url
    }
}

// since we have a constructor, TS lets us create isntances like this
let s1 = new Snap({'id':1, 'title':'cat', 'url':'https:bbc.ie' })
    // s1.title = 'Here is a picture'
    // s1.url   = 'http://nonsuch.ie'
console.log( s1 )
