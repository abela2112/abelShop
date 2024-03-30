import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container=styled.div`
height: 60vh;
display: flex;
justify-content: center;
align-items:center;
background-color: #fcf5f5;
flex-direction: column;
`
const Title=styled.h1`
font-size: 70px;
    margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
display: flex;
background-color: #fff;
border:1px solid lightgray ;
${mobile({width:'80%'})}
`
const Input=styled.input`
flex: 8;
border: none;
padding-left: 20px;
`
const Desc=styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign:'center'})}
    
`
const Button=styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLeter</Title>
        <Desc>Get timely updates from your favorite products</Desc>
        <InputContainer>
        <Input placeholder='your email here'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter