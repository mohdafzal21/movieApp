

//action creator 
import Apidata from '../Api'
import singleApiData from './singleApi'

//action type constants
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE = 'GET_MOVIE'
export const RESET_MOVIE = 'RESET_MOVIE'
//action creator - which returns action type and data 
export function getMovies(){
    return async function(dispatch){
        const getResp = await Apidata
        return dispatch({
            type: GET_MOVIES,
            data : getResp
        })
    }
}
export function getMovie(id){
    return async function(dispatch){
        const resp = await singleApiData.find((movies)=> 
        movies._id === id)
        return dispatch({
            type : GET_MOVIE,
            payload : resp
        })
    }
}



export function resetMovie(){
    return {
        type : RESET_MOVIE
    }
}