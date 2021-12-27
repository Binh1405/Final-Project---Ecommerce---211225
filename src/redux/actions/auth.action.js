import * as types from "../constants/auth.constants"
import api from "../../apiService"

const authAction={}

authAction.register=({name, email, password})=>async(dispatch)=>{
    try {
        dispatch({type: types.POST_REGISTER_REQUEST})
        const res = await api.post("/users/register", {name, email, password})
        dispatch({type: types.POST_REGISTER_SUCCESS})
    } catch (error) {
        dispatch({type: types.POST_REGISTER_FAIL})
    }
}

authAction.login=({email, password})=>async(dispatch)=>{
    try {
        dispatch({type: types.POST_LOGIN_REQUEST})
        const res = await api.post("/users/login", {email, password})
        dispatch({type: types.POST_LOGIN_SUCCESS, payload: res.data})
        const token = res.data.data
        // console.log("token", token)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("token", token)
    } catch (error) {
        dispatch({type: types.POST_LOGIN_FAIL})
    }
}

export default authAction