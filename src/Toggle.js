import React from 'react';
import {connect} from 'react-redux'

const Toggle = (props)=>{
   console.log("Inside Toggle", props)
    return(
        <div>
        { props.messageVisibility && <h1>Hello ALL</h1> }
            <button onClick={
                ()=>props.dispatch({
                type :'TOGGLE'

                })}>Toggle here</button>
        </div>
    )
}

const mapStateToProps = state=> ({
    messageVisibility : state.ToggleReducer.messageVisibility
    
})

export default connect(mapStateToProps,null)(Toggle)