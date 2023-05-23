const values = [1, 3, 6, 11, 215, 21, 66, 42]

// we can populate variables from these values

// we can skip members and ellipsis the rest
const [zero, one, , three, ...rest] = values

console.log( zero, one, three, rest )

// the spread operator
const squares = [1, 4, 9, 16, 25]
const powers  = [2, 4, 8, 16, 32]

const both = [ ...squares, ...powers ] // ... means spread them out

console.log( both )

// tuple destructuring
const getMission = ():[string, string, string]=>{
    return ['inform', 'educate', 'entertain']
}

const [inf, edu, ent] = getMission()

console.log( inf, edu, ent )