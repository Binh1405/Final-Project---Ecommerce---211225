const initialState = {
    count: 0,

}

const counterReducer = (state = initialState, action) => {
    const{type, payload}=action
    switch(type){
        case "increase":
            return {count: state.count+action.payload}
        case "decrease":
            return {count: state.count-action.payload}
        default:
            return state
    }
}

export default counterReducer