import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'
const Container=styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:'none'})}
  
`
const Title=styled.h1`
font-size: 70px;
    
`
const Desc=styled.p`
   font-size :20px ;
   margin:50px 0;
   font-weight: 500;
   letter-spacing: 3px;
`
const Button=styled.button`
padding:10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
    
`


const Arrow=styled.div`
width: 50px;
height: 50px;
display: flex;
border-radius: 50%;
background-color: #fff7f7;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
z-index: 10;

left:${props => props.direction==='left' && '10px'};
right:${props => props.direction==='right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.5;
    
`
const Wrapper=styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease-in-out;
   transform: translateX(${(props)=>props.index *-100}vw);
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg};
   
`

const ImgContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
`
const Image=styled.img`
 height: 80%;   
`

const InfoContainer=styled.div`
    /* display: flex; */
    flex: 1;
    padding: 50px;
`
const Slider = () => {
    const navigate = useNavigate()
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction) => {
        if(direction ==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
        }
        console.log(slideIndex)
    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeft/>
        </Arrow>
        <Wrapper index={slideIndex}>
        {sliderItems.map(item=>(
             <Slide bg={item.bg} key={item.id}>
             <ImgContainer>
             <Image src={item.img}/>
             </ImgContainer>
             <InfoContainer>
                 <Title>{item.title}</Title>
                 <Desc>{item.desc}</Desc>
                    <Button onClick={() => navigate('/products')}>SHOP NOW</Button>
             </InfoContainer>
         </Slide>
        ))}
       
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowRight/>
        </Arrow>
        </Container>
  )
}

export default Slider