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

// some utility functions
//               testData      what the user typed
const suggest = (arr:string[], query:string)=>{
    return arr.filter( (item)=>{
        // only handle non-empty strings that match the incoming query
        return query.length >0 && item.startsWith(query)
    })
}

const cleanUpUtil = (container:HTMLElement)=>{
    container.innerHTML = ''
}

const appendResults = (container: HTMLElement, results: string[]) => { // | string
    // type guard - do we have ONE string or an array of strings?
    // if (typeof (results) == 'string'){
    //     const li = document.createElement("li")
    //     const text = document.createTextNode(results)
    //     li.appendChild(text)
    //     container.appendChild(li)
    // }
    // else {
        // in returns index, of returns actual value
        for (const result of results) {
            // creeate an HTML entity for each suggestion
            const li = document.createElement("li")
            const text = document.createTextNode(result)
            li.appendChild(text)
            container.appendChild(li)
        }
    // }
}

// we need to grab bits of the DOM - cast as types so TS can hint
const searchBox: HTMLInputElement = document.querySelector('#search') as HTMLInputElement
// this time we allow TS to infer the type of 'results'
const results = document.querySelector('#results') as HTMLElement

// here we instantiate an Observable. by convention we us a trailing $ to indicate an observable
const keyStream$ = fromEvent(searchBox, 'keyup') // :Observable<T>

// ...and here we make a subscriber to our observable
keyStream$.pipe(
    // sequential pipe
    debounceTime(500), // don't bother responding if events occur less than 0.5 sec
    map((event) => {
        const input = event.target as HTMLInputElement;
        return input.value
    }),
    tap((item) => {
        // currently the entire content of the 'input' element (its value)
        console.log(`we received ${item}`)
        return item
    }),
    map( (query)=>{
        // this will ALWAYS return an array
        return suggest(testData, query)
    } )
    // NB nothing is instantiated until we have at least one subscriber
).subscribe((result) => { 
    // remove any previous suggestions
    cleanUpUtil(results)
    // inject the curent suggestion(s)
    appendResults(results, result) })



// keyStream$.subscribe( (result)=>{
//     console.log(`something happened ${result}`)
// } )

