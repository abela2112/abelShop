import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../api/userapi'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
display: flex;
padding: 20px;
width: 25%;
flex-direction: column;
background-color: #fff;
${mobile({ width: '75%' })} 
`
const Form = styled.form`
   display :flex ;
   flex-direction: column;
`
const Input = styled.input`
   flex: 1;
   min-width :40% ;
   padding: 10px;
   margin:10px ;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`


const Button = styled.button`
width:40%;
background-color: teal;
cursor: pointer;
padding: 15px 20px;
border:none;
color: #fff;
margin:0 0 10px 10px;
&:disabled{
  background-color: green;
  cursor: not-allowed;
}
`

const Link = styled.a`
font-size: 12px;
font-weight: 200;
text-decoration: underline;
    cursor: pointer;
    margin: 5px 10px;
`
const Error=styled.div`
  color: red;
`
const Login = () => {
  const dispatch = useDispatch()
  const {isLoading,error}=useSelector(state=>state.user)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    login(dispatch, { email, password })
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>


          <Input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} />

          <Input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

          <Button disabled={isLoading} onClick={handleSubmit}>LOGIN</Button>
          {error && <Error>Something went wrong....</Error>}
          <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
          <Link href='/register'>CREATE NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login