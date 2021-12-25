const initialState = {
    allNews: [], 
    isLoading: false
}

const newsReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case "GET_ALL_NEWS_REQUEST":
        return {...state, isLoading: true}
        case "GET_ALL_NEWS_SUCCESS":
        return {...state, allNews: payload, isLoading: false}
        case "GET_ALL_NEWS_FAIL":
        return {...state, isLoading: false}
        default: 
        return state
}
}

export default newsReducer