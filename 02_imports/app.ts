// import * as maths from './maths'
// default NO braces, others inside braces
import RandomThing, {pi, sqrtTwo, phi } from './maths'
// we can import types and interfaces
import { Post } from './util'
import { Penguin, Dog } from './util'

// we can import json
// we get sa JS structure
import * as posts from './data.json'
console.log(posts)

// use our types
type Animal = Penguin | Dog

const gromit:Dog = {
    breeds: ['plasticene', 'silicone'],
    yearOfBirth: 1991
}

// console.log(maths.pi)
console.log(pi)