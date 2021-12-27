import api from "../../apiService"
import * as types from "../constants/product.constant"

const productAction={}

productAction.getAllProducts=()=>{
    return async(dispatch)=>{
        try {
            dispatch({type: types.GET_ALL_PRODUCTS_REQUEST, payload: null})
            const res = await api.get("/products")
            console.log("res", res) 
            dispatch({type: types.GET_ALL_PRODUCTS_SUCCESS, payload: res.data.data.result})
        } catch (error) {
            dispatch({types: types.GET_ALL_PRODUCTS_FAIL})
        }
    }
}

export default productAction