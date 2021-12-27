import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import authAction from '../redux/actions/auth.action'
import "./Style/LoginPage.css" 

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  const dispatch = useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(authAction.login({email, password}))
  }
  
  return (

<div className="login-form">
<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
</div>
    )
}

export default LoginPage
