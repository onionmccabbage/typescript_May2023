// RxJS Observables are created and detroyed on demand
// when the first subscriber subscribes, the obsrvable will be instantiated
// when the last subscriber unsubscribes, the observable is marked for destruction

// modern observables are usually implemented via RxJS (in Angular, in React ...)

import { fromEvent, debounceTime, map, tap } from 'RxJS'
import { Observable } from 'rx'

// here are some potential search suggestions
const testData: string[] = [
    'people',
    'planets',
    'species',
    'vehicles',
    'starships'
]

// we need to grab bits of the DOM - cast as types so TS can hint
const searchBox: HTMLInputElement = document.querySelector('#search') as HTMLInputElement
// this time we allow TS to infer the type of 'results'
const results = document.querySelector('#results') as HTMLElement

// here we instantiate an Observable. by convention we us a trailing $ to indicate an observable
const keyStream$ = fromEvent(searchBox, 'keyup') // :Observable<T>

// ...and here we make a subscriber to our observable
keyStream$.pipe(
    // sequential pipe
    debounceTime(500), // don't bother responding if events occurr less than 0.5 sec
    map((event) => {
        const input = event.target as HTMLInputElement;
        return input.value
    }),
    tap((item) => {
        console.log(`we receivd ${item}`)
    })
    // NB nothing is instantiated until w have at least one subscriber
).subscribe(() => { })



// keyStream$.subscribe( (result)=>{
//     console.log(`something happened ${result}`)
// } )

