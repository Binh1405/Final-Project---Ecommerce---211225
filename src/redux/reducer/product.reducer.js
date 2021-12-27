import * as types from "../constants/product.constant"

const initialState = {
    allProducts: [],
    isLoading: false, 
}

const productReducer = (state = initialState, action) => {
    const {type, payload}= action
    switch(type){
        case types.GET_ALL_PRODUCTS_REQUEST:
            return {...state, isLoading: true}
        case types.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, allProducts: payload, isLoading: false}
        case types.GET_ALL_PRODUCTS_FAIL:
            return {...state, isLoading: false}
        default: 
        return state
    }
}

export default productReducer