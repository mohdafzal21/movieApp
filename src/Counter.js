import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {incrementCounter,decrementCounter} from './action'
const Counter = (props)=> {
    console.log("in counter", props)
    return(
        <div>
        <h1>COUNT: {props.count}</h1>
         {/* <button onClick={()=>props.dispatch({
                type : 'INC'
            })}>Increment</button> */}
             <button onClick={()=>props.incrementCounter()}>Increment</button>
             <button onClick={()=>props.decrementCounter()}>Decrement</button>
        </div>
    )
}
const mapStateToProps = state=>({
    count : state.CounterReducer.count,
})
const mapDispatchToProps = dispatch => bindActionCreators({
      incrementCounter,
      decrementCounter
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Counter)





