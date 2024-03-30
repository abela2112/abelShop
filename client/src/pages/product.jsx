
import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Announcement from '../components/Announcement'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartRedux'
const Container=styled.div`
    
`
const Wrapper=styled.div`
  display:flex ;
  padding: 50px;
  ${mobile({flexDirection:'column',padding:'10px'})}
  

`
const ImgContainer=styled.div`
flex: 1;

    
`
const InfoContainer=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    ${mobile({padding:'10px'})}
`
const Title=styled.h1`
    font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
    
`
const Image=styled.img`
   width:100%;
   height: 90vh;
   object-fit:cover ;
   ${mobile({height:'40vh'})}
`
const Price=styled.div`
  font-size:20px ;
  font-weight: 400;
`

const FilterContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
    ${mobile({width:'100%'})}
`
const Filter=styled.div`
display: flex;
align-items: center;
    
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({color})=>color};
    margin:0 5px;
    cursor: pointer;
`

const Select = styled.select`
    padding: 5px;
    margin-left: 10px;
`
const Option = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:'100%'})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;



`
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
border:1px solid teal;

`
const Button=styled.button`
padding: 15px;
border: 1px solid teal;
font-weight:500;
background-color: #fff;
cursor: pointer;
&:hover{
    background-color: #f8f4f4;
}
`
const Product = () => {
    const dispatch=useDispatch()
    const {id}=useParams()
    const [quantity,setQuantity]=useState(1)
    const [color,setColor]=useState('')
    const [size,setSize]=useState('')
    const [product,setProduct]=useState({})
    const handleAmount=(direction)=>{
        if(direction==='dec'){
            quantity>1 && setQuantity(quantity-1)
        }
        else{
            setQuantity(quantity+1)
        }
    }

    const handleClick=()=>{
        dispatch(addToCart({...product,color,size,quantity}))
    }
    useEffect(()=>{
        axios.get(`/api/product/${id}`).then(({data})=>setProduct(data.data)).catch((err)=>console.error(err));
    },[])
    console.log(product)

    
  return (
    <Container>
    
       <Wrapper>
       <ImgContainer>
        <Image src={product?.image} />
        </ImgContainer>
        <InfoContainer>
            <Title>{product?.title}</Title>
            <Desc>{product?.desc}</Desc>
            <Price>${product?.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>color</FilterTitle>
                    {
                        product?.color?.map((color) =><FilterColor onClick={()=>setColor(color)} color={color}/> )
                    }
                    
                   
                </Filter>
                <Filter>
                   <FilterTitle>Size</FilterTitle>
                   <Select onChange={(e)=>setSize(e.target.value)}>
                   <Option disabled selected>size</Option>
                   {
                        product?.size?.map((size) =><Option value={size}>{size}</Option> )
                    }  

                    </Select>
                </Filter>
            </FilterContainer>
<AddContainer>
    <AmountContainer>
        <Remove onClick={()=>handleAmount('dec')}/>
        <Amount>{quantity}</Amount>
        <Add onClick={()=>handleAmount('inc')}/>

    </AmountContainer>
    <Button onClick={()=>handleClick()}>ADD TO CART</Button>
</AddContainer>

        </InfoContainer>
       </Wrapper>

    </Container>
  )
}

export default Product