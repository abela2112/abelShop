import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
const Container=styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Title=styled.h1`
color: white;
margin-bottom: 20px;

    
`
const Info=styled.div`
position: absolute;
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;

bottom: 0;


`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height:'30vh'})}


`
const Button=styled.button`
padding: 10px;
background-color: #fff;
color: gray;
cursor: pointer;
border: none;
font-weight: 600;
`
const CatagoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        
        </Link>


    </Container>
  )
}

export default CatagoryItem