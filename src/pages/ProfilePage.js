import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userAction from '../redux/actions/user.action'

const ProfilePage = () => {
    const user = useSelector(state => state.state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(userAction.getCurrentUser())
    },[])
    return (
        <div>
            This is profile page
        </div>
    )
}

export default ProfilePage
