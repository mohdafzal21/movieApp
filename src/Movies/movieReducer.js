import {GET_MOVIES,GET_MOVIE,RESET_MOVIE} from './movieAction'
const initialState = {
    movies : [],
    isLoaded : false,
    movie :{}
}


export const moviesReducer = (state=initialState, action)=> {
    switch(action.type){
        case  GET_MOVIES : 
        return {...state , movies : action.data , isLoaded:true}
        case GET_MOVIE : 
        return {...state, movie : action.payload}
        case RESET_MOVIE :
            return {...state , movie : {}}
        default : 
       return {...state}
    }
}
