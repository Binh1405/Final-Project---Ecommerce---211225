import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userAction from '../redux/actions/user.action'

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(userAction.getCurrentUser())
    })
    return (
        <div>
            
        </div>
    )
}

export default ProfilePage
