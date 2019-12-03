import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider}  from 'react-redux'
import {rootReducer} from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router} from 'react-router-dom'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { save, load } from "redux-localstorage-simple"
//UI in sync with url
const store = createStore(
    rootReducer,
    load(),
    composeWithDevTools(applyMiddleware(ReduxThunk,logger,save()))
    
    )
ReactDOM.render(
<Provider store={store}>
 <Router>
     <App />
</Router>
</Provider>
, document.getElementById('root'));





// import api from './api'
// //action creators are functions that will return action type 
// import apiData from './apidata'
// export function getMovies(){
//     return async function(dispatch){
//         const response = await api
        
        
//         return dispatch({
//             type: "GET_MOVIES",
//             data:response

//         })
//     }
// }

// // const response = await apiData.find((data)=> data._id === getMovieId)

// export function getMovie(id){
//     return async function(dispatch){
//         const response = await apiData.find((data) => data._id === id)
//         return dispatch({
//           type:'GET_MOVIE',
//           data:response
//         })
//     }
// }

// export function resetMovie(){
//     return{
//         type : 'RESET_MOVIE'
//     }
// }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const hello = ()=> ({  welcome: "hello" })

//reducer function

// const store = createStore(hello)
// console.log(store.getState())

// const initialState = {
//     welcome :"TOm"
// }
// //reducer function - 
// const greeting= (state=initialState, action)=>{
   
//     switch(action.type){
//         case 'GREETING_WORLD':
//             return { ...state ,welcome : `Hello WORLD`}
//         case 'GREETING_NAME' : 
//             return { ...state ,welcome : `Hello ${action.name}`, name: `${action.name}`}
//         case 'CHANGE_ACTION': 
//             return {...state,  actionName: "Change Action" , newData:action.data}
//         default :
//         return {...state}
//     }

// }
// const apiData = "some data after doing the fetch"
// const store = createStore(greeting)
// console.log(store.getState())

// store.dispatch({
//     type: 'GREETING_NAME',
//     name : "plant"
// })
// console.log(store.getState())
// store.dispatch({
//     type : 'CHANGE_ACTION',
//     data : apiData
    
// })
// console.log(store.getState())
// store.dispatch({
//     type : 'GREETING_WORLD'
// })
// console.log(store.getState())
