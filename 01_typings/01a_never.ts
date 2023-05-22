// The 'never' return type
// see https://stackoverflow.com/questions/42291811/use-of-never-keyword-in-typescript

// Normally a function which does not have a return value returns 'undefined' implicitly
// However this function throws an error before ever reaching the end
// Therefore the return type will be 'never'
const foo = () :never => {
    throw new Error("Error");
    // return 'ok' // unreachable
}
// Inferred return type is never
function fail() {
    return Error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
// also used in type guards...