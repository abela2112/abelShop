import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info=styled.div`
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        z-index: 3;
        justify-content: center;
        align-items: center;
        background-color:rgba(0,0,0,0.2);
        cursor: pointer;
        transition: all 0.5s ease;

        

`
const Container=styled.div`
    display: flex;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
            
        }
`
const Circle=styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;


`
const Image=styled.img`
        height: 75%;
        z-index: 3;
        `

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
margin: 10px;
&:hover{
      transform:scale(1.1) ;
        }
`
const Product = ({product}) => {
  return (
 <Link to={`/product/${product?._id}`}>   <Container>
        <Circle/>
        <Image src={product.image}p/>
        <Info>
            <Icon>
               <ShoppingCartOutlined/>
            </Icon>

            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
    </Link>
  )
}

export default Product