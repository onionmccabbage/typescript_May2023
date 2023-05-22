// sometimes we need to write type guards to ensure we have specific types
{
    // a function which may take a string or a number
    const eg = (sn:string | number  )=>{
        // if a string is received, return its length
        if (typeof sn == 'string'){
            return sn.length // the TS language engine is offering string-like options
        // if a number is received, return the number to 2dp
        } else {
            return sn.toFixed(2)
        }
    }
    const words = 'one point four nine six'
    const num   = 1.496
    console.log( eg(words), eg(num) )
}
