const initialState={
    messageVisibility : false
}

export const ToggleReducer= (state = initialState, action)=>{
    switch(action.type){
       
        case 'TOGGLE': 
        return {...state, messageVisibility: !state.messageVisibility }
        default : 
        return {...state}
       
    }

}
