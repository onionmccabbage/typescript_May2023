// we can declare types and interfaces
export interface Penguin {
    breed:string
    yearOfbirth:number
}

export type Dog = {
    breeds:string[], // or Array<string>
    yearOfBirth:number
}

export interface Post {
    userId   : number
    id       : number
    title    : string
    body     : string
}