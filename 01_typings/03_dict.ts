// there is a dictionary type in TS
// NB in TS the recommendation is to use Interface for type declaratinos
interface Cephalopod {
    hasInk    : boolean
    arms      : number
    tentacles : number
}

// here is a dictionary - a mutable non-numeric-indexed collection
interface CephalopodDict {
    // the square-brackets indicate this is a collection (not directly just a string)
    [species:string] : Cephalopod // we use our interface
}

enum oct {vulgaris='Vulgaris', loligo='Loligo'}
const cephDict:CephalopodDict = {} // this is a constant whose values are shallow
// add some members to our dictionary
cephDict[oct.vulgaris] = {hasInk:true, arms:8, tentacles:0}
cephDict[oct.loligo]   = {hasInk:true, arms:8, tentacles:2}

//                                                      dot notation (case sensitive)
console.log( cephDict[oct.vulgaris], cephDict['Loligo'], cephDict.Vulgaris )



