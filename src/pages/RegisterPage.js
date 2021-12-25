import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import authAction from '../redux/actions/auth.action'
import "./Style/RegisterPage.css"

const RegisterPage = () => {

const [dataForm, setDataForm] = useState({
    name: "", 
    email:"",
    password: ""
})
const {name, email, password} = dataForm 
const handleOnChange=(e)=>{
    setDataForm({...dataForm, [e.target.name]: e.target.value})
}
const dispatch = useDispatch()
const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(authAction.register({name, email, password}))
    }

    return (
<div className="register-form">
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Your Name" name="name" onChange={handleOnChange} value={name}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} value={email}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} value={password}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}

export default RegisterPage
