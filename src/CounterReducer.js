import {INC,DEC} from './action'
const initialState = {
    count : 0
}

export const CounterReducer =(state=initialState,action )=>{
    switch(action.type){
        case INC: 
        return {...state, count : state.count + 1}
        case DEC:
                return {...state, count : state.count - 1}
        default :
        return {...state}
    }
}