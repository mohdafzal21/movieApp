//action type constants
export const INC = 'INC'
export const DEC = 'DEC'

//action creators - functions which will return the action type

export function incrementCounter(){
    return {
        type : INC
    }
}

export function decrementCounter(){
    return {
        type : DEC
    }
}